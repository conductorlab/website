<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { founder } = siteContent
</script>

<template>
  <section class="founder">
    <div class="inner">
      <div class="founder-grid">
        <div>
          <div class="eyebrow">{{ founder.eyebrow }}</div>
          <h2>{{ founder.heading }}</h2>
          <div class="paragraphs">
            <p v-for="(p, i) in founder.paragraphs" :key="i">{{ p }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-head">
            <span class="card-icon" aria-hidden="true"><span class="card-icon-inner" /></span>
            <div>
              <div class="card-title">{{ founder.card.title }}</div>
              <div class="card-subtitle mono">{{ founder.card.subtitle }}</div>
            </div>
          </div>
          <div class="facts">
            <div v-for="fact in founder.card.facts" :key="fact.label" class="fact">
              <div class="fact-label mono">{{ fact.label }}</div>
              <div class="fact-value">{{ fact.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.founder {
  border-bottom: 1px solid var(--border);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 88px 32px;
}

.founder-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 56px;
  align-items: center;
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
  margin: 0 0 24px;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 600;
  color: var(--text);
  text-wrap: balance;
}

.paragraphs {
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-size: clamp(18px, 2.2vw, 20px);
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 520px;
}
.paragraphs p {
  margin: 0;
  text-wrap: pretty;
}

.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.card-head {
  padding: 28px 28px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-icon {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  border-radius: 10px;
}
.card-icon-inner {
  width: 14px;
  height: 14px;
  background: var(--accent);
  border-radius: 3px;
  transform: rotate(45deg);
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}
.card-subtitle {
  font-size: 13.5px;
  color: var(--text-muted);
}
.mono {
  font-family: 'Geist Mono', monospace;
}

.facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.fact {
  padding: 22px 28px;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.fact:nth-child(2n) {
  border-right: none;
}
.fact:nth-last-child(-n+2) {
  border-bottom: none;
}
.fact-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.fact-value {
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--text);
}
</style>
