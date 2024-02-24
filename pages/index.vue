<script setup lang="ts"></script>

<template>
  <div>
    <ULandingCTA
      title="Zilo"
      description="An all in one Discord Bot with auto-moderation, administration, music, and more!"
      :card="false"
      :links="[
        { label: 'Invite the bot now!', size: 'xl', to: 'https://discord.com/oauth2/authorize?client_id=767143692230197278&permissions=1513962695871&scope=bot%20applications.commands', target: '_blank' },
        { label: 'Join the Support Server', size: 'xl', variant: 'outline', color: 'blurple', to: 'https://discord.gg/bZBQQa63D6', target: '_blank' },
      ]"
      class="!min-h-2"
    />
    <UContainer>
      <Placeholder data-aos="fade-up" />
      <UPageHero title="Feature #1" description="pretty cool feature" align="left" data-aos="fade-left">
        <Placeholder />
      </UPageHero>
      <UPageHero title="Feature #2" description="pretty cool feature" align="right" data-aos="fade-right">
        <Placeholder />
      </UPageHero>
    </UContainer>
  </div>
</template>
