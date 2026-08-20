<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { hero } = siteContent
</script>

<template>
  <section id="top" class="hero">
    <div class="grid-bg" aria-hidden="true" />
    <div class="inner">
      <div class="badge">
        <span class="dot" aria-hidden="true" />
        {{ hero.badge }}
      </div>
      <h1>{{ hero.heading }}</h1>
      <p class="subhead">{{ hero.subhead }}</p>
      <div class="actions">
        <a :href="hero.cta.href" class="cta">{{ hero.cta.label }}</a>
        <span class="note">{{ hero.note }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(90% 70% at 50% 0%, black 40%, transparent 100%);
  pointer-events: none;
}

.inner {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  padding: 96px 32px 104px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px 5px 10px;
  border: 1px solid var(--border);
  border-radius: 100px;
  background: var(--surface);
  font-size: 12.5px;
  color: var(--text-muted);
  margin-bottom: 32px;
  font-family: 'Geist Mono', monospace;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

h1 {
  max-width: 900px;
  margin: 0 0 24px;
  font-size: clamp(38px, 6vw, 68px);
  line-height: 1.03;
  letter-spacing: -0.035em;
  font-weight: 600;
  color: var(--text);
  text-wrap: balance;
}

.subhead {
  max-width: 640px;
  margin: 0 0 40px;
  font-size: clamp(18px, 2.2vw, 20px);
  line-height: 1.55;
  color: var(--text-muted);
  text-wrap: pretty;
  font-weight: 400;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.cta {
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 15px;
  font-weight: 500;
  border-radius: 9px;
  box-shadow: var(--shadow);
  transition: background-color 0.2s;
}
.cta:hover {
  background: var(--accent-hover);
  color: var(--accent-contrast);
}

.note {
  font-size: 14px;
  color: var(--text-muted);
  font-family: 'Geist Mono', monospace;
}
</style>
