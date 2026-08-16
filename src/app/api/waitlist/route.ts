import { NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: { email?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const webhook = process.env.WAITLIST_WEBHOOK_URL
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'travel-memory-landing', ts: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
    } catch (err) {
      console.error('[waitlist] webhook forward failed:', err)
      return NextResponse.json({ ok: false, error: 'We could not save your spot right now. Please try again shortly.' }, { status: 502 })
    }
  } else {
    console.warn(`[waitlist] WAITLIST_WEBHOOK_URL not set. Signup accepted but NOT persisted: ${email}`)
  }
  return NextResponse.json({ ok: true })
}
