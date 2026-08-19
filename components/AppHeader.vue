<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { header } = siteContent
</script>

<template>
  <header class="site-header">
    <div class="inner">
      <a href="#top" class="logo">
        <span class="mark" aria-hidden="true"><span class="mark-inner" /></span>
        <span class="logo-text">{{ header.logo }}</span>
      </a>
      <nav class="nav" aria-label="Primary">
        <a
          v-for="link in header.nav"
          :key="link.href"
          :href="link.href"
          class="navlink"
        >{{ link.label }}</a>
        <ThemeToggle />
        <a :href="header.cta.href" class="cta">{{ header.cta.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  border-bottom: 1px solid var(--border);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
}

.mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
}

.mark-inner {
  width: 9px;
  height: 9px;
  background: var(--accent);
  border-radius: 2px;
  transform: rotate(45deg);
}

.logo-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.02em;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navlink {
  color: var(--text-muted);
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 7px;
}
.navlink:hover {
  color: var(--text);
  background: var(--surface);
}

.cta {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  background: var(--text);
  color: var(--bg);
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  transition: opacity 0.2s;
}
.cta:hover {
  opacity: 0.85;
  color: var(--bg);
}
</style>
