<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { shift } = siteContent
</script>

<template>
  <section :id="shift.id" class="shift">
    <div class="inner">
      <div class="copy">
        <div class="eyebrow">{{ shift.eyebrow }}</div>
        <h2>{{ shift.heading }}</h2>
        <div class="paragraphs">
          <p v-for="(p, i) in shift.paragraphs" :key="i">{{ p }}</p>
        </div>
      </div>
      <div class="cards">
        <div v-for="card in shift.cards" :key="card.label" class="card">
          <div class="card-label" :class="{ accent: card.label === 'Requirement' }">{{ card.label }}</div>
          <div class="card-body">{{ card.body }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shift {
  border-bottom: 1px solid var(--border);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 88px 32px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 48px;
}

.copy {
  max-width: 760px;
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
  max-width: 680px;
}
.paragraphs p {
  margin: 0;
  text-wrap: pretty;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
@media (max-width: 700px) {
  .cards {
    grid-template-columns: minmax(0, 1fr);
  }
}

.card {
  background: var(--panel);
  padding: 28px;
}

.card-label {
  font-family: 'Geist Mono', monospace;
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 12px;
}
.card-label.accent {
  color: var(--accent);
}

.card-body {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text);
}
</style>
