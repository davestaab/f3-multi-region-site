<template>
  <UContainer>
    <h1 class="font-bold text-2xl text-(--ui-primary) text-center">
      F3 {{ tenant.name }}      
    </h1>
    <ColorModeButton />
    <h1 class="font-bold text-2xl text-(--ui-secondary)">
      What is F3?
    </h1>
    <p>F3 is a men’s workout group, with the mission to plant, grow and serve small workout groups for the invigoration
of male community leadership.</p>
    <p>Our workouts:</p>
    <ul>
      <li>Are free of charge</li> 
      <li>Are held outdoors, rain or shine, heat or cold</li>
      <li>Are open to all men (FiA is a similar organization for women)</li>
      <li>Are led by men who participate in the workout in a rotating fashion, with no training or certification necessary</li>
      <li>End with a Circle of Trust</li>
    </ul>
    <p>
      The F3 Credo is: <b>Leave no man behind, and leave no man where you find him.</b>
    </p>
  </UContainer>
</template>
<script setup lang="ts">
import ColorModeButton from '~/components/ColorModeButton.vue';

const tenant = useTenant();
</script>
