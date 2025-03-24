<script setup lang="ts"></script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
    <path fill="#c6a129" d="m0 128 60-21.3C120 85 240 43 360 69.3 480 96 600 192 720 234.7 840 277 960 267 1080 224s240-117 300-154.7l60-37.3v288H0Z" />
  </svg>
  <UFooter class="bg-gold-500 dark:text-zinc-800 text-zinc-50">
    <template #left>
      Zilo © 2020-{{ new Date().getFullYear() }}
    </template>
    <template #right>
      <UButton class="dark:text-zinc-800 text-zinc-50"
        icon="i-simple-icons-discord"
        variant="ghost"
        to="https://discord.gg/bZBQQa63D6"
        target="_blank"
        aria-label="Discord"
      />
      <UButton class="dark:text-zinc-800 text-zinc-50"
        icon="i-simple-icons-github"
        variant="ghost"
        to="https://github.com/izmystic/zilo"
        target="_blank"
        aria-label="GitHub"
      />
      <UColorModeButton class="dark:text-zinc-800 text-zinc-50" />
    </template>
  </UFooter>
</template>
