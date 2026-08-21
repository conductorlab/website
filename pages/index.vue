<script setup lang="ts">
import { siteContent } from '~/content/site-content'

const { meta } = siteContent
const url = 'https://condra.dev/'

useSeoMeta({
  title: meta.title,
  description: meta.description,
  ogTitle: meta.title,
  ogDescription: meta.description,
  ogType: 'website',
  ogUrl: url,
  ogImage: meta.ogImage,
  ogSiteName: meta.siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: meta.title,
  twitterDescription: meta.description,
  twitterImage: meta.ogImage,
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: url }],
})
</script>

<template>
  <div class="page">
    <AnnouncementBar />
    <AppHeader />
    <main>
      <HeroSection />
      <ShiftSection />
      <ProductSection />
      <WhoSection />
      <FounderSection />
      <ContactSection />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  width: 100%;
  background: var(--bg);
  position: relative;
}
</style>
