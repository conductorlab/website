<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { closingCta, contact } = siteContent

const name = ref('')
const email = ref('')
const message = ref('')
type Status = 'idle' | 'submitting' | 'success' | 'error'
const status = ref<Status>('idle')
const errorText = ref('')

async function onSubmit() {
  status.value = 'submitting'
  errorText.value = ''
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { name: name.value, email: email.value, message: message.value },
    })
    status.value = 'success'
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (err: unknown) {
    status.value = 'error'
    const fetchErr = err as { data?: { statusMessage?: string } }
    errorText.value = fetchErr?.data?.statusMessage || closingCta.errorMessage
  }
}
</script>

<template>
  <section :id="closingCta.id" class="closing">
    <div class="grid-bg" aria-hidden="true" />
    <div class="inner">
      <h2>{{ closingCta.heading }}</h2>
      <p class="body">{{ closingCta.body }}</p>

      <div class="panel">
        <form v-if="status !== 'success'" class="form" novalidate @submit.prevent="onSubmit">
          <p class="form-intro">{{ closingCta.formIntro }}</p>
          <div class="field">
            <label for="contact-name">Name</label>
            <input
              id="contact-name"
              v-model="name"
              type="text"
              name="name"
              autocomplete="name"
              required
              maxlength="200"
            >
          </div>
          <div class="field">
            <label for="contact-email">Email</label>
            <input
              id="contact-email"
              v-model="email"
              type="email"
              name="email"
              autocomplete="email"
              required
              maxlength="320"
            >
          </div>
          <div class="field">
            <label for="contact-message">Message <span class="optional">(optional)</span></label>
            <textarea
              id="contact-message"
              v-model="message"
              name="message"
              rows="3"
              maxlength="4000"
            />
          </div>
          <p v-if="status === 'error'" class="error" role="alert">{{ errorText }}</p>
          <div class="actions">
            <button type="submit" class="cta" :disabled="status === 'submitting'">
              {{ status === 'submitting' ? 'Sending…' : closingCta.formCta }}
            </button>
            <a :href="`mailto:${contact.email}`" class="email-link">{{ closingCta.emailCta }}</a>
          </div>
        </form>
        <p v-else class="success" role="status">{{ closingCta.successMessage }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.closing {
  position: relative;
  overflow: hidden;
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(80% 100% at 50% 100%, black 30%, transparent 100%);
  pointer-events: none;
}

.inner {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  padding: 104px 32px;
  text-align: center;
}

h2 {
  margin: 0 auto 20px;
  max-width: 720px;
  font-size: clamp(30px, 5vw, 52px);
  line-height: 1.06;
  letter-spacing: -0.035em;
  font-weight: 600;
  color: var(--text);
  text-wrap: balance;
}

.body {
  margin: 0 auto 40px;
  max-width: 560px;
  font-size: clamp(18px, 2.4vw, 21px);
  line-height: 1.5;
  color: var(--text-muted);
  text-wrap: pretty;
}

.panel {
  max-width: 460px;
  margin: 0 auto;
  text-align: left;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 28px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-lg);
}

.form-intro {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-muted);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}
.optional {
  font-weight: 400;
  color: var(--text-muted);
}
.field input,
.field textarea {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  color: var(--text);
  font-family: inherit;
  resize: vertical;
}
.field input:hover,
.field textarea:hover {
  border-color: var(--border-strong);
}

.error {
  margin: 0;
  font-size: 13.5px;
  color: var(--accent);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 4px;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 24px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 9px;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: background-color 0.2s;
}
.cta:hover:not(:disabled) {
  background: var(--accent-hover);
}
.cta:disabled {
  opacity: 0.6;
  cursor: default;
}

.email-link {
  font-size: 14px;
  color: var(--text-muted);
}
.email-link:hover {
  color: var(--text);
}

.success {
  padding: 28px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-lg);
  text-align: center;
  color: var(--text);
  font-size: 15px;
  margin: 0;
}
</style>
