<script setup lang="ts">
const tenant = useTenant();
const route = useRoute();
const ao = tenant.AOs.find(a => a.slug === route.params.slug);
const headerImage = computed(() => {
  const i = Math.floor(Math.random() * (tenant.headerImages?.length ?? 0));
  return tenant.headerImages?.length ? tenant.headerImages[i] : '/images/cropped-139.jpeg';
})
const eventsHeader = ao?.events.map(e => `${e.type}: ${e.description}`).join(' and ') || 'No events scheduled';
useSeoMeta({
  title: `${ao?.name} - F3 ${tenant.name}`,
  description: `${eventsHeader} at ${ao?.locationName}`,
})
</script>

<template>
  <main class="w-full max-w-(--ui-container) mx-auto bg-white">
    <img :src="headerImage" class="w-full" alt="F3 Header Image">
    <section class="flex flex-col gap-10 p-4">
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold text-(--ui-secondary)">{{  ao?.name }}</h2>
        <p>
          <strong>Location:</strong> {{ ao?.locationName }}<br><br>
          <template v-for="event in ao?.events" :key="event.description">
            <strong>{{ event.type }}:</strong>
            {{ event.description }} <br>
          </template>
        </p>
        <p>
          <strong>AOQ:</strong> {{ ao?.aoq }}
        </p>
        <h2 class="text-2xl font-semibold text-(--ui-secondary)">Map</h2>
        <iframe v-if="ao?.mapUrl" class="w-full aspect-3/4 md:aspect-video max-w-6xl self-center" loading="lazy" :src="ao?.mapUrl" frameborder="0" />
      </section>
    </section>
  </main>
</template>
