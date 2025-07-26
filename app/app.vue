<script lang="ts" setup>
import type { NavigationMenuChildItem, NavigationMenuItem } from '@nuxt/ui';
import TheHeader from './components/TheHeader.vue';
import { useTenant } from '@/composables/useTenant';
import type { AO } from './utils/tenants/types';
import type { baseURL } from 'process';
const tenant = useTenant();
const items: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Free Workout Locations',
    children: tenant.AOs.map(createMenu),
  }
];
function createMenu(ao: AO): NavigationMenuChildItem {
  return {
    label: ao.name,
    to: `/aos/${ao.slug}`,
  }
}
</script>
<template>
  <UApp>
    <div class="bg-(--ui-color-primary-200)">
      <the-header />
      <UNavigationMenu
        variant="link"
        :items="items" class="w-full max-w-(--ui-container) justify-start mx-auto bg-white" 
        />
      <NuxtPage />
      <footer class="bg-(--ui-color-primary-700) text-white w-full p-4 text-sm">
        <p>&copy; 2025 F3 {{ tenant.name }}.</p>
      </footer>
    </div>
  </UApp>
</template>