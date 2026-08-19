<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { product } = siteContent
</script>

<template>
  <section :id="product.id" class="product">
    <div class="inner">
      <div class="intro">
        <div class="eyebrow">{{ product.eyebrow }}</div>
        <h2>{{ product.heading }}</h2>
        <p>{{ product.intro }}</p>
      </div>
      <div class="features">
        <article
          v-for="(feature, i) in product.features"
          :key="feature.title"
          class="feat-row"
          :class="{ first: i === 0, last: i === product.features.length - 1 }"
        >
          <div class="feat-text">
            <span class="tag">{{ feature.tag }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.body }}</p>
          </div>
          <FeatureVisual :visual="feature.visual" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product {
  border-bottom: 1px solid var(--border);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 88px 32px;
}

.intro {
  max-width: 640px;
  margin-bottom: 56px;
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

.features {
  display: flex;
  flex-direction: column;
}

.feat-row {
  padding: 56px 0;
  border-top: 1px solid var(--border);
}
.feat-row.first {
  padding: 8px 0 56px;
  border-top: none;
}
.feat-row.last {
  padding-bottom: 8px;
}
.feat-row:nth-child(even) .feat-text {
  order: 2;
}
.feat-row:nth-child(even) :deep(.feat-vis) {
  order: 1;
}

.feat-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tag {
  font-family: 'Geist Mono', monospace;
  font-size: 13px;
  color: var(--text-muted);
}

.feat-text h3 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
}

.feat-text p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
  text-wrap: pretty;
}
</style>
