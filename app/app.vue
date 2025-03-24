<script setup lang="ts">
useSeoMeta({
  title: "Zilo",
  ogTitle: "Zilo",
  description: "An all-in-one Discord Bot offering auto-moderation, administration, music, games, and a variety of other features to enhance your server experience!",
  ogDescription: "An all-in-one Discord Bot offering auto-moderation, administration, music, games, and a variety of other features to enhance your server experience!",
  ogImage: "/zilo-head.webp",
  twitterCard: "summary_large_image",
  themeColor: "#c6a129",
});
</script>

<template>
  <UApp>
    <AppHeader />

    <NuxtPage />

    <AppFooter />
  </UApp>
</template>
