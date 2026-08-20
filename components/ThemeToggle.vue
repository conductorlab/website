<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
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
      class="icon icon-dark"
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
      class="icon icon-light"
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
 * that mismatch (light icon has 1 child, dark icon has 9) is what crashed
 * hydration for visitors whose stored theme differed from the statically
 * generated page's baked-in default. Which icon is visible is decided
 * purely by CSS, driven by the `data-theme` attribute on <html> that's
 * already set correctly before first paint (see app.vue's no-flash script).
 */
.icon-dark {
  display: none;
}
:global([data-theme='dark']) .icon-dark {
  display: block;
}
:global([data-theme='dark']) .icon-light {
  display: none;
}
</style>
