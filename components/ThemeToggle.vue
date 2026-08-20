<script setup lang="ts">
const { theme, toggleTheme } = useTheme()

// Vue's hydration intentionally skips reconciling `class` mismatches for
// performance, so if the client's real `theme` (e.g. from a stored cookie)
// differs from what was baked into the static HTML at build time, the icon
// class hydration leaves behind is never corrected on its own. Gating on
// `mounted` keeps the very first client render identical to the server
// (avoiding any mismatch to begin with), then forces one genuine post-mount
// re-render — an ordinary reactive update, not hydration — which does patch
// the class correctly.
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
    :aria-pressed="theme === 'dark'"
    @click="toggleTheme"
  >
    <svg
      class="icon"
      :class="{ visible: mounted && theme === 'dark' }"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
    <svg
      class="icon"
      :class="{ visible: !mounted || theme !== 'dark' }"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-left: 4px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.theme-toggle:hover {
  border-color: var(--border-strong);
  color: var(--text);
}

/*
 * Both icons are always rendered (identical markup on server and client)
 * so hydration never has to reconcile two structurally different SVGs —
 * the previous v-if/v-else swap (1 child vs 9 children) is what crashed
 * hydration for visitors whose stored theme differed from the statically
 * generated page's baked-in default. Visibility is a plain scoped class
 * toggle driven by this component's own `theme` value — never a selector
 * that reaches outside the component (a `:global()` attempt at that
 * previously got mis-compiled into a bare `[data-theme=dark]` rule that
 * matched <html> itself and hid the entire page).
 */
.icon {
  display: none;
}
.icon.visible {
  display: block;
}
</style>
