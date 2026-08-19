<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { who } = siteContent
</script>

<template>
  <section :id="who.id" class="who">
    <div class="inner">
      <div class="intro">
        <div class="eyebrow">{{ who.eyebrow }}</div>
        <h2>{{ who.heading }}</h2>
        <p>{{ who.intro }}</p>
      </div>
      <div class="who-grid">
        <div v-for="platform in who.platforms" :key="platform.name" class="platform-card">
          <div class="platform-name">{{ platform.name }}</div>
          <div class="platform-body">{{ platform.body }}</div>
        </div>
      </div>
      <div class="agency">
        <span class="agency-icon" aria-hidden="true">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </span>
        <div>
          <div class="agency-title">{{ who.agencyCallout.title }}</div>
          <div class="agency-body">{{ who.agencyCallout.body }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.who {
  border-bottom: 1px solid var(--border);
  background: var(--surface);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 88px 32px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 48px;
}

.intro {
  max-width: 640px;
}

.eyebrow {
  font-family: 'Geist Mono', monospace;
  font-size: 13.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

h2 {
  margin: 0 0 20px;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 600;
  color: var(--text);
  text-wrap: balance;
}

.intro p {
  margin: 0;
  font-size: clamp(18px, 2.2vw, 20px);
  line-height: 1.55;
  color: var(--text-muted);
  text-wrap: pretty;
}

.who-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.platform-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.platform-name {
  font-family: 'Geist Mono', monospace;
  font-size: 13px;
  color: var(--accent);
}

.platform-body {
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-muted);
}

.agency {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 28px;
  border: 1px dashed var(--border-strong);
  border-radius: 12px;
  max-width: 760px;
}

.agency-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  color: var(--accent);
  margin-top: 2px;
}

.agency-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.agency-body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  text-wrap: pretty;
}
</style>
