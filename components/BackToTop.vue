<script setup lang="ts">
const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > window.innerHeight
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <a
    href="#top"
    class="back-to-top"
    :class="{ visible }"
    aria-label="Back to top"
    :tabindex="visible ? 0 : -1"
    :aria-hidden="!visible"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  </a>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s, border-color 0.2s, color 0.2s;
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.back-to-top:hover {
  border-color: var(--border-strong);
  color: var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .back-to-top {
    transition: none;
  }
}
</style>
