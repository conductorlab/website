<script setup lang="ts">
const { theme } = useTheme()

// Mirrors the --bg token in assets/css/tokens.css for each theme (the
// browser chrome color can't read CSS custom properties, so these two
// values have to be kept in sync by hand if that token ever changes).
const THEME_COLOR_LIGHT = '#f7f8fb'
const THEME_COLOR_DARK = '#08080a'

// Inline, blocking head script: runs before the body is parsed/painted.
// It only ever has to act when no `condra-theme` cookie exists yet (the
// SSR response already carries the right `data-theme` attribute whenever
// the cookie is present) — see composables/useTheme.ts for the full
// rationale. This is what makes R6 (no FOUC) hold even on a cookie-less
// first visit.
const noFlashScript = `(function(){try{var m=document.cookie.match(/(?:^|; )condra-theme=(light|dark)/);if(!m){var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');}}catch(e){}})();`

useHead({
  htmlAttrs: {
    lang: 'en',
    'data-theme': theme,
  },
  script: [
    {
      key: 'no-flash-theme',
      innerHTML: noFlashScript,
      tagPosition: 'head',
    },
  ],
  meta: [
    { name: 'theme-color', content: THEME_COLOR_LIGHT, media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: THEME_COLOR_DARK, media: '(prefers-color-scheme: dark)' },
  ],
})
</script>

<template>
  <NuxtPage />
</template>
