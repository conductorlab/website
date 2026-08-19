export type Theme = 'light' | 'dark'

/**
 * SSR-correct theme resolution (R6/R7).
 *
 * Source of truth is the `condra-theme` cookie: it is readable on the
 * server, so when it's set the server renders the right `data-theme`
 * directly on `<html>` — zero client JS involved, zero flash.
 *
 * When no cookie exists yet (first visit, no explicit choice), the server
 * falls back to 'light' and a tiny inline head script (see app.vue) reads
 * `prefers-color-scheme` and corrects the attribute before first paint.
 * This composable mirrors that same resolution client-side and keeps
 * following the system preference live (via a matchMedia listener) for as
 * long as the visitor hasn't made an explicit choice — matching the
 * source design's behavior.
 */
export function useTheme() {
  const cookie = useCookie<Theme | null>('condra-theme', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  })

  // Server-side fallback when there's no explicit cookie yet.
  const systemTheme = useState<Theme>('condra-system-theme', () => 'light')

  const theme = computed<Theme>(() => cookie.value ?? systemTheme.value)
  const isExplicit = computed(() => cookie.value !== null)

  function applyDomTheme(value: Theme) {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
    }
  }

  function toggleTheme() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    cookie.value = next
    applyDomTheme(next)
  }

  if (import.meta.client) {
    onMounted(() => {
      if (!isExplicit.value) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        systemTheme.value = mq.matches ? 'dark' : 'light'
        applyDomTheme(systemTheme.value)

        const handleChange = (e: MediaQueryListEvent) => {
          if (!isExplicit.value) {
            systemTheme.value = e.matches ? 'dark' : 'light'
            applyDomTheme(systemTheme.value)
          }
        }
        mq.addEventListener('change', handleChange)
        onUnmounted(() => mq.removeEventListener('change', handleChange))
      }
    })
  }

  return { theme, toggleTheme }
}
