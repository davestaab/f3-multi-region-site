<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue';
import { useTenant } from '@/composables/useTenant';
const tenant = useTenant();
</script>
<template>
  <UApp>
    <div class="bg-(--ui-color-primary-200)">
      <the-header />
      <NuxtPage />
      <footer class="bg-(--ui-color-primary-700) text-white w-full p-4 text-sm">
        <p>&copy; 2025 F3 {{ tenant.name }}.</p>
      </footer>
    </div>
  </UApp>
</template>