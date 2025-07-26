<script setup lang="ts">
import { useTenant } from '@/composables/useTenant';
const tenant = useTenant();
const headerImage = computed(() => {
  const i = Math.floor(Math.random() * (tenant.headerImages?.length ?? 0));
  return tenant.headerImages?.length ? tenant.headerImages[i] : '/images/cropped-139.jpeg';
})
</script>
<template>
  <main class="w-full max-w-(--ui-container) mx-auto bg-white">
    <img :src="headerImage" class="w-full" alt="F3 Header Image">
    <section class="flex flex-col gap-10 p-4">
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold text-(--ui-secondary)">Our Mission</h2>
        <p class="text-lg">
          F3 is a men’s workout group, with the <strong>mission to plant, grow and serve small workout groups for the invigoration
          of male community leadership.</strong>
        </p>
      </section>
      <section class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold text-(--ui-secondary)">Our Workouts:</h2>
        <ul class="list-disc list-inside space-y-2 text-lg">
          <li>Are <strong>free of charge</strong></li>
          <li>Are <strong>open to all men</strong> (<a class="hover:underline text-secondary" href="https://fiaknoxville.com/">FiA</a> is a similar organization for women)</li>
          <li>Are <strong>held outdoors</strong>, rain or shine, heat or cold</li>
          <li>Are <strong>led by men</strong> who participate in the workout in a rotating fashion, with no training or certification necessary</li>
          <li>End with a <strong>Circle of Trust</strong></li>
        </ul>
      </section>
    </section>
    <section class="bg-(--ui-color-primary-950) text-(--ui-color-secondary-500) px-4 py-8 text-center text-3xl">
      Leave no man behind, and leave no man where you find him.
    </section>
    <section class="flex flex-col gap-4 p-4">
      <h2 class="text-2xl font-semibold text-(--ui-secondary)">What to Expect</h2>
      <iframe class="w-full aspect-video max-w-2xl self-center" src="https://www.youtube.com/embed/eWNsCl5oXqg" title="F3 Shamrock Convergence" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
      <div class="text-muted text-xs self-center">Thanks <a class="hover:underline text-secondary" href="https://www.youtube.com/@lukebrownknoxville2750">Luke Brown (medium)</a> for above video.</div>
      <iframe class="w-full aspect-video max-w-2xl self-center" src="https://player.vimeo.com/video/156581438" allowfullscreen title="F3 Workout"/>
      <div class="text-muted text-xs self-center">Thanks <a class="hover:underline text-secondary" href="https://wildstorygroup.com/">Alex Widmer Video</a> for above video.</div>
      <iframe class="w-full aspect-video max-w-2xl self-center" src="https://www.youtube.com/embed/TT5-Eec2PDk" title="F3 Knoxville Promotional Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
      <div class="text-muted text-xs self-center">Thanks to the men of F3Knoxville for above video.</div>
    </section>
    <section class="flex flex-col gap-4 p-4">
      <h2 class="text-2xl font-semibold text-(--ui-secondary)">Workouts near you</h2>
      <iframe class="w-full aspect-video max-w-6xl self-center" loading="lazy" src="https://map.f3nation.com/?lat=35.9211152&lon=-83.9909406&zoom=10" frameborder="0" />
    </section>
    </main >
</template>

