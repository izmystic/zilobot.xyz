<script setup lang="ts">
const links = [
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
  <UHeader :links="links">
    <template #left>
      <a class="font-bold text-xl">Zilo</a>
    </template>
    <template #right>
      <UButton size="xl" icon="i-simple-icons-discord" to="https://discord.com/oauth2/authorize?client_id=767143692230197278&permissions=1513962695871&scope=bot%20applications.commands" target="_blank">Invite</UButton>
    </template>
  </UHeader>
</template>
