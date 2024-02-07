<script setup lang="ts">
useSeoMeta({
  title: "Zilo",
  ogTitle: "Zilo",
  description: "An all in one Discord Bot with auto-moderation, administration, music, and more!",
  ogDescription: "An all in one Discord Bot with auto-moderation, administration, music, and more!",
  ogImage: "/zilo-head.webp",
  twitterCard: "summary_large_image",
  themeColor: '#c6a129'
});
</script>

<template>
  <AppHeader />

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <AppFooter />
</template>
