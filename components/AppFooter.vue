<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { footer } = siteContent
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="brand">
        <span class="mark" aria-hidden="true"><span class="mark-inner" /></span>
        <span class="brand-name">{{ footer.logo }}</span>
        <span class="tagline mono">{{ footer.tagline }}</span>
      </div>
      <div class="links">
        <a :href="footer.talkToUs.href">{{ footer.talkToUs.label }}</a>
        <a :href="footer.email.href">{{ footer.email.label }}</a>
        <span>© {{ year }} {{ footer.logo }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
}

.inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 36px 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 1px solid var(--border-strong);
  border-radius: 5px;
}
.mark-inner {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 2px;
  transform: rotate(45deg);
}

.brand-name {
  font-weight: 600;
  font-size: 14px;
  color: var(--text);
}

.tagline {
  font-size: 13px;
  color: var(--text-muted);
  margin-left: 6px;
}
.mono {
  font-family: 'Geist Mono', monospace;
}

.links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 13.5px;
  color: var(--text-muted);
}
.links a {
  color: var(--text-muted);
}
.links a:hover {
  color: var(--text);
}
</style>
