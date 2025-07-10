<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  }
})
const myIcon = computed(() => isDark.value ? 'i-lucide-moon' : 'i-lucide-sun');
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="myIcon"
      color="neutral"
      variant="ghost"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
