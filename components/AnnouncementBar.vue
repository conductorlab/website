<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { announcement } = siteContent
</script>

<template>
  <a class="announcement" :href="announcement.href">
    <span class="badge">
      <span class="dot" aria-hidden="true" />
      {{ announcement.badge }}
    </span>
    <span>{{ announcement.text }}</span>
    <span class="arrow" aria-hidden="true">→</span>
  </a>
</template>

<style scoped>
.announcement {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 9px 16px;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
  font-size: 13px;
  color: var(--text-muted);
  font-family: 'Geist Mono', monospace;
  text-align: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 2px 9px;
  border: 1px solid var(--border-strong);
  border-radius: 100px;
  color: var(--accent);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

.arrow {
  color: var(--text-muted);
}
</style>
