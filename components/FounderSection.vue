<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { founder } = siteContent
</script>

<template>
  <section class="founder">
    <div class="inner">
      <div class="founder-grid">
        <div>
          <div class="eyebrow section-eyebrow">{{ founder.eyebrow }}</div>
          <h2 class="heading-section section-heading">{{ founder.heading }}</h2>
          <div class="paragraphs copy-lead">
            <p v-for="(p, i) in founder.paragraphs" :key="i">{{ p }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-head">
            <span class="card-icon" aria-hidden="true"><span class="card-icon-inner" /></span>
            <div>
              <div class="card-title title-sm">{{ founder.card.title }}</div>
              <div class="card-subtitle label-mono">{{ founder.card.subtitle }}</div>
            </div>
          </div>
          <div class="facts">
            <div v-for="fact in founder.card.facts" :key="fact.label" class="fact">
              <div class="fact-label label-mono">{{ fact.label }}</div>
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

.section-eyebrow {
  margin-bottom: 20px;
}

.section-heading {
  margin: 0 0 24px;
}

.paragraphs {
  display: flex;
  flex-direction: column;
  gap: 22px;
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
  margin-bottom: 8px;
}
.fact-value {
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--text);
}
</style>
