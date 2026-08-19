// One-off utility to regenerate public/og-image.png from
// scripts/og-image-source.svg. Not part of the build — run manually if the
// OG placeholder needs to change. Requires `playwright` + a Chromium
// install available locally (not a project dependency).
const path = require('path')
const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
  await page.goto('file://' + path.resolve(__dirname, 'og-image-source.svg'))
  await page.screenshot({ path: path.resolve(__dirname, '../public/og-image.png') })
  await browser.close()
})()
