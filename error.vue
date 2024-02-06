<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});
</script>

<template>
  <div>
    <UContainer>
      <UMain>
        <UPage>
          <UPageError :error="error" />
        </UPage>
      </UMain>
    </UContainer>
  </div>
</template>
