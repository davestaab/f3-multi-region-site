<script setup lang="ts">
  import { useTenant } from '@/composables/useTenant';
  const { name, logo } = useTenant()
  const logoSrc = computed(() => logo ?? '/f3-logo-60x60.png');
</script>

<template>
  <header class="flex flex-row items-center bg-(--ui-color-primary-700) py-2">
    <div class="w-full max-w-(--ui-container) mx-auto flex items-center">
      <img :src="logoSrc" class="h-12 px-2" alt="F3 Logo">
      <div class="flex md:flex-row flex-col items-baseline md:gap-4 text-white justify-center">
        <div class="text-2xl font-bold">F3 {{ name }}</div>
        <div class="text-xs md:text-base">Fitness. Fellowship. Faith.</div>
      </div>
    </div>
  </header>
</template>
