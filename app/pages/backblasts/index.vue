<script setup lang="ts">
import { ref } from 'vue'

// State
const page = ref(1)
const pageSize = 10

// Fetch function
const fetchBackblasts = async (p: number) => {
  return await $fetch<{
    page: number
    pageSize: number
    total: number
    totalPages: number
    results: {
      date: string
      ao: string
      q: string
      coq: string
      pax_count: number
      fng_count: number
      title: string
    }[]
  }>(`.netlify/functions/backblast-list?page=${p}&pageSize=${pageSize}`)
}

// Initial fetch
const { data, refresh } = await useAsyncData(
  'backblasts',
  () => fetchBackblasts(page.value),
  { watch: [page] }
)

// Next/Prev controls
const nextPage = () => {
  if (data.value && page.value < data.value.totalPages) {
    page.value++
    refresh()
  }
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    refresh()
  }
}
</script>

<template>
  <main class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Backblasts</h1>

    <ul v-if="data?.results?.length">
      <li
        v-for="item in data.results"
        :key="item.date + '-' + item.ao"
        class="border-b py-3"
      >
        <h2 class="font-semibold text-lg">{{ item.title }}</h2>
        <p class="text-sm text-gray-600">
          {{ item.date }} — AO: {{ item.ao }} — Q: {{ item.q }}
        </p>
        <p class="text-sm">PAX: {{ item.pax_count }}, FNG: {{ item.fng_count }}</p>
      </li>
    </ul>

    <div v-else class="text-gray-500">No backblasts found.</div>

    <!-- Pagination Controls -->
    <div class="flex justify-between mt-6">
      <button
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        :disabled="page === 1"
        @click="prevPage"
      >
        Prev
      </button>

      <span v-if="data">
        Page {{ data.page }} of {{ data.totalPages }}
      </span>

      <button
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        :disabled="!data || page === data.totalPages"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </main>
</template>
