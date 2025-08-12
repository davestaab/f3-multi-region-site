<script lang="ts" setup>
import type { NavigationMenuChildItem, NavigationMenuItem } from '@nuxt/ui';
import TheHeader from './components/TheHeader.vue';
import { useTenant } from '@/composables/useTenant';
import { LinkType, type AO } from './utils/tenants/types';
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
const social = computed(() => tenant.Links.filter(l => l.type === LinkType.Social));
</script>
<template>
  <UApp>
    <div class="bg-(--ui-color-primary-200)">
      <the-header />
      <UNavigationMenu
        variant="link"
        :items="items"
        class="w-full max-w-(--ui-container) justify-start mx-auto bg-white" 
        />
      <NuxtPage />
      <footer class="bg-(--ui-color-primary-700) text-white w-full p-4 text-sm">
        <div class="w-full max-w-(--ui-container) mx-auto flex">
          <span>&copy; 2025 F3 {{ tenant.name }}</span>
          <span class="flex ">
            <a v-for="l in social" :key="l.name">
              <UIcon v-if="l.icon" :name="l.icon"/>
            </a>
          </span>
        </div>
      </footer>
    </div>
  </UApp>
</template>