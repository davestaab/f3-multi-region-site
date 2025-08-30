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
      <footer class="bg-(--ui-color-primary-700) text-white w-full text-sm flex flex-col p-2 ">
        <div class="w-full max-w-(--ui-container) mx-auto flex flex-col gap-2">
          <span class="flex gap-6 row justify-center">
            <a v-for="l in social" :key="l.name" :href="l.url" :aria-label="l.name" target="_blank">
              <UIcon v-if="l.icon" :name="l.icon" class="size-8"/>
            </a>
          </span>
          <span >&copy; 2025 F3 {{ tenant.name }}</span>
        </div>
      </footer>
    </div>
  </UApp>
</template>