<script setup lang="ts">
const items = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Commands",
    to: "/docs",
  },
  {
    label: "Dashboard",
    to: "/dashboard",
  },
];
</script>

<template>
  <UBanner id="rewrite-message" title="Zilo is currently being rewritten, expect some downtime." close />
  <UHeader title="">
    <UNavigationMenu :items="items" />
  </UHeader>
</template>
