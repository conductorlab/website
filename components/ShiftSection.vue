<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { shift } = siteContent
</script>

<template>
  <section :id="shift.id" class="shift">
    <div class="inner">
      <div class="copy">
        <div class="eyebrow section-eyebrow">{{ shift.eyebrow }}</div>
        <h2 class="heading-section section-heading">{{ shift.heading }}</h2>
        <div class="paragraphs copy-lead">
          <p v-for="(p, i) in shift.paragraphs" :key="i">{{ p }}</p>
        </div>
      </div>
      <div class="cards">
        <div v-for="card in shift.cards" :key="card.label" class="card">
          <div class="card-label label-mono" :class="{ accent: card.label === 'Requirement' }">{{ card.label }}</div>
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
  font-size: 14.5px;
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
