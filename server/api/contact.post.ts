interface ContactPayload {
  name: string
  email: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<ContactPayload>>(event)

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || name.length > 200) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter your name.' })
  }
  if (!email || email.length > 320 || !EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email address.' })
  }
  if (message.length > 4000) {
    throw createError({ statusCode: 400, statusMessage: 'Message is too long.' })
  }

  // TODO(condra): wire this up to a real destination (e.g. an email send,
  // a CRM/lead-tracking API, or a Slack webhook). For now we just validate
  // and log the submission so the endpoint is safe to point the form at
  // today without any third-party integration decision being made here.
  console.log('[contact] new interest submission', {
    name,
    email,
    message: message || undefined,
    receivedAt: new Date().toISOString(),
  })

  return { ok: true as const }
})
