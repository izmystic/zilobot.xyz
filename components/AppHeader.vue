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

const id = "ziloBanner";
const hideBanner = () => {
  localStorage.setItem(id, "true");

  document.querySelector("html")?.classList.add("hide-banner");
};
</script>

<template>
  <div class="relative bg-primary transition-[background] backdrop-blur z-50 app-banner">
    <UContainer class="py-2">
      <div class="flex items-center justify-between gap-2">
        <div class="lg:flex-1 hidden lg:flex items-center" />

        <p class="text-sm font-semibold text-white dark:text-gray-900">Zilo is currently being rewritten, expect some downtime.</p>

        <div class="flex items-center justify-end lg:flex-1">
          <button class="p-1.5 rounded-md inline-flex hover:bg-primary/90" aria-label="Close banner" @click.prevent="hideBanner">
            <UIcon name="i-heroicons-x-mark-20-solid" class="w-5 h-5 text-white dark:text-gray-900" />
          </button>
        </div>
      </div>
    </UContainer>
  </div>
  <UHeader :links="links">
    <template #left>
      <a class="font-bold text-xl">Zilo</a>
    </template>
    <template #right>
      <UButton size="xl" icon="i-simple-icons-discord" to="https://discord.com/oauth2/authorize?client_id=767143692230197278&permissions=1513962695871&scope=bot%20applications.commands" target="_blank">Invite</UButton>
    </template>
  </UHeader>
</template>

<style scoped>
.hide-banner .app-banner {
  display: none;
}
</style>
