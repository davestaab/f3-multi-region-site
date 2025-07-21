<template>
  <header class="flex flex-row items-center bg-(--ui-color-primary-700) py-2">
    <img src="/f3-logo-60x60.png" class="h-12 px-2" alt="F3 Logo">
    <div class="flex md:flex-row flex-col items-baseline md:gap-4 text-white">
      <div class="text-2xl font-bold">F3 {{ name }}</div>
      <div class="text-xs md:text-sm">Fitness. Fellowship. Faith.</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTenant } from '@/composables/useTenant';
const { name } = useTenant()
</script>