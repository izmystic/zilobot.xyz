<script setup lang="ts"></script>

<template>
  <div>
    <UPageHero
      title="Zilo"
      description="An all-in-one Discord Bot offering auto-moderation, administration, music, games, and a variety of other features to enhance your server experience!"
      :links="[
        { label: 'Invite the bot now!', size: 'xl', to: 'https://discord.com/oauth2/authorize?client_id=767143692230197278&permissions=1513962695871&scope=bot%20applications.commands', target: '_blank' },
        { label: 'Join the Support Server', size: 'xl', variant: 'outline', color: 'blurple', to: 'https://discord.gg/bZBQQa63D6', target: '_blank' },
      ]"
    >
      <Placeholder data-aos="fade-up" />
    </UPageHero>
    <UContainer>
      <UPageSection title="Feature #1" description="Very cool feature!" orientation="horizontal" data-aos="fade-right"> <Placeholder /> </UPageSection>
      <UPageSection title="Feature #2" description="Very cool feature!" orientation="horizontal" reverse data-aos="fade-left"> <Placeholder /> </UPageSection>
    </UContainer>
  </div>
</template>
