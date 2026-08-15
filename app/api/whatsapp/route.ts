import { NextResponse } from 'next/server'

/**
 * WhatsApp delivery endpoint.
 *
 * Supports two providers; the first one that is configured wins:
 *
 * ┌──────────────────────── EASY (recommended) ────────────────────────┐
 * │ CallMeBot — free, no Meta business setup.                          │
 * │ Setup (one-time, done by the owner on their phone):                │
 * │   1. Add  +34 644 51 95 23  as a WhatsApp contact.                 │
 * │   2. Send it the exact text:                                       │
 * │        I allow callmebot to send me messages                       │
 * │   3. CallMeBot replies with an API key.                            │
 * │ Then set in .env.local:                                            │
 * │   CALLMEBOT_APIKEY=<CALLMEBOT_API_KEY>                             │
 * │   WHATSAPP_OWNER_NUMBER=923135833852  (digits only, no '+')        │
 * │                                                                    │
 * │ Limitation: can only deliver to the owner's registered number.     │
 * │ Customer-side confirmation is therefore not sent in this mode.     │
 * └────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────── ADVANCED (full automation) ─────────────────────┐
 * │ Meta WhatsApp Cloud API — sends to owner AND customer.             │
 * │   WHATSAPP_TOKEN=<META_GRAPH_API_TOKEN>                            │
 * │   WHATSAPP_PHONE_NUMBER_ID=<META_PHONE_NUMBER_ID>                  │
 * │   WHATSAPP_OWNER_NUMBER=923135833852                               │
 * │ Optional (required for cold customer messages):                    │
 * │   WHATSAPP_CUSTOMER_TEMPLATE=<APPROVED_TEMPLATE_NAME>              │
 * │   WHATSAPP_CUSTOMER_LANG=en_US                                     │
 * └────────────────────────────────────────────────────────────────────┘
 */

export const runtime = 'nodejs'

const DEFAULT_OWNER = '923135833852'
const GRAPH_VERSION = process.env.WHATSAPP_GRAPH_VERSION || 'v20.0'

type EnquiryPayload = {
  name?: string
  email?: string
  whatsapp?: string
  date?: string
  serviceType?: string
  details?: string
}

function normaliseWhatsApp(raw: string): string {
  const digits = (raw || '').replace(/\D/g, '')
  if (!digits) return ''
  if (digits.startsWith('00')) return digits.slice(2)
  if (digits.startsWith('0')) return `92${digits.slice(1)}`
  return digits
}

function buildOwnerMessage(d: Required<EnquiryPayload>) {
  return [
    '*New Enquiry — ZOHAIB CINEMATICS*',
    '',
    `*Name:* ${d.name}`,
    `*Email:* ${d.email}`,
    `*WhatsApp:* +${normaliseWhatsApp(d.whatsapp)}`,
    `*Event Date:* ${d.date || '—'}`,
    `*Service:* ${d.serviceType}`,
    '',
    '*Event Details & Vision:*',
    d.details || '—',
    '',
    '— Sent from zohaibcinematics.com',
  ].join('\n')
}

function buildCustomerMessage(d: Required<EnquiryPayload>) {
  return [
    `Thank you, ${d.name}!`,
    '',
    `We have received your enquiry with ZOHAIB CINEMATICS for ${d.serviceType}${
      d.date ? ` on ${d.date}` : ''
    }.`,
    '',
    'Our creative director will respond personally within 24 hours to arrange your private consultation.',
    '',
    '— ZOHAIB CINEMATICS',
  ].join('\n')
}

/* ───────────────────────── CallMeBot provider ───────────────────────── */

async function sendViaCallMeBot(toDigits: string, body: string) {
  const apikey = process.env.CALLMEBOT_APIKEY
  if (!apikey) return { ok: false, status: 500, info: 'CallMeBot not configured' }

  const url =
    `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(
      toDigits
    )}&text=${encodeURIComponent(body)}&apikey=${encodeURIComponent(apikey)}`

  try {
    const res = await fetch(url, { method: 'GET' })
    // CallMeBot returns 200 + plain text on success ("Message queued").
    // On failure (bad key, wrong number, rate-limit) it returns 200 with
    // HTML containing "ERROR" — so check the body too.
    const text = await res.text().catch(() => '')
    const failed = /error|apikey|not.*allow|invalid/i.test(text)
    return {
      ok: res.ok && !failed,
      status: res.status,
      info: failed ? text.slice(0, 200) : 'sent',
    }
  } catch (err) {
    return {
      ok: false,
      status: 0,
      info: err instanceof Error ? err.message : 'network error',
    }
  }
}

/* ─────────────────────── Meta Cloud API provider ────────────────────── */

async function sendMetaText(
  token: string,
  phoneId: string,
  to: string,
  body: string
) {
  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${phoneId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to,
        type: 'text',
        text: { preview_url: false, body },
      }),
    }
  )
  return { ok: res.ok, status: res.status }
}

async function sendMetaTemplate(
  token: string,
  phoneId: string,
  to: string,
  templateName: string,
  language: string,
  firstName: string
) {
  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${phoneId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'template',
        template: {
          name: templateName,
          language: { code: language },
          components: [
            {
              type: 'body',
              parameters: [{ type: 'text', text: firstName }],
            },
          ],
        },
      }),
    }
  )
  return { ok: res.ok, status: res.status }
}

/* ─────────────────────────────── Handler ────────────────────────────── */

export async function POST(request: Request) {
  let payload: EnquiryPayload
  try {
    payload = (await request.json()) as EnquiryPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const data: Required<EnquiryPayload> = {
    name: (payload.name || '').trim(),
    email: (payload.email || '').trim(),
    whatsapp: (payload.whatsapp || '').trim(),
    date: (payload.date || '').trim(),
    serviceType: (payload.serviceType || '').trim(),
    details: (payload.details || '').trim(),
  }

  if (!data.name || !data.email || !data.whatsapp || !data.serviceType) {
    return NextResponse.json(
      { error: 'Missing required fields.' },
      { status: 400 }
    )
  }

  const customerNumber = normaliseWhatsApp(data.whatsapp)
  if (customerNumber.length < 10) {
    return NextResponse.json(
      { error: 'Please enter a valid WhatsApp number with country code.' },
      { status: 400 }
    )
  }

  const ownerNumber =
    (process.env.WHATSAPP_OWNER_NUMBER || '').replace(/\D/g, '') || DEFAULT_OWNER

  const useCallMeBot = Boolean(process.env.CALLMEBOT_APIKEY)
  const useMeta = Boolean(
    process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID
  )

  if (!useCallMeBot && !useMeta) {
    return NextResponse.json(
      {
        error:
          'WhatsApp delivery is not configured on the server. Please contact the site administrator.',
      },
      { status: 503 }
    )
  }

  // ─── Owner delivery (critical path) ──────────────────────────────────
  let ownerOk = false
  let ownerInfo = ''

  if (useCallMeBot) {
    const r = await sendViaCallMeBot(ownerNumber, buildOwnerMessage(data))
    ownerOk = r.ok
    ownerInfo = r.info
  } else if (useMeta) {
    const r = await sendMetaText(
      process.env.WHATSAPP_TOKEN!,
      process.env.WHATSAPP_PHONE_NUMBER_ID!,
      ownerNumber,
      buildOwnerMessage(data)
    )
    ownerOk = r.ok
    ownerInfo = `meta:${r.status}`
  }

  // ─── Customer confirmation (best-effort, Meta only) ──────────────────
  let customerOk = false
  if (useMeta) {
    const customerTemplate = process.env.WHATSAPP_CUSTOMER_TEMPLATE
    const customerLang = process.env.WHATSAPP_CUSTOMER_LANG || 'en_US'

    const r = customerTemplate
      ? await sendMetaTemplate(
          process.env.WHATSAPP_TOKEN!,
          process.env.WHATSAPP_PHONE_NUMBER_ID!,
          customerNumber,
          customerTemplate,
          customerLang,
          data.name.split(' ')[0] || data.name
        )
      : await sendMetaText(
          process.env.WHATSAPP_TOKEN!,
          process.env.WHATSAPP_PHONE_NUMBER_ID!,
          customerNumber,
          buildCustomerMessage(data)
        )
    customerOk = r.ok
  }

  if (!ownerOk) {
    console.error('[whatsapp] owner delivery failed', { ownerInfo })
    return NextResponse.json(
      {
        error:
          'We could not deliver your enquiry at this time. Please try again shortly or contact us directly.',
      },
      { status: 502 }
    )
  }

  return NextResponse.json({
    ok: true,
    ownerDelivered: ownerOk,
    customerDelivered: customerOk,
  })
}
