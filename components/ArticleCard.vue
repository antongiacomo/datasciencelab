<script setup lang="ts">
import { ClockIcon, CalendarIcon, LinkIcon } from "@heroicons/vue/24/outline";
defineProps<{
  article: Article
}>();
</script>

<template>
  
  <article
    class="rounded-lg w-full flex items-center antialiased pb-4"
  >
  <nuxt-link class="w-full h-full" :to="article && article.path">
      <div
        class="w-full h-full rounded-xl shadow-lg bg-white border-2 border-blue-900 px-6 py-3 pb-6"
      >
        <div class="my-2 text-xl py-0 font-bold leading-tight">
          {{ article.title }}
        </div>
        
        <div class="flex gap-2 text-lg text-gray-500 font-medium">
      
          <div>{{ article.meta.people.map((person) => person.name).join(", ") }}</div>
        </div>

        <div class="flex my-4 gap-6 uppercase s">
          <div class="flex items-center gap-1 font-medium">
            <CalendarIcon class="h-6 w-6 stroke-2" />

            <span class="text-left font-medium">
              {{ convertDate(article.meta.date) }}</span>
          </div>
          <div class="flex items-center gap-1">
            <ClockIcon class="h-6 w-6 stroke-2" />
            <span class="text-left font-medium"> {{article.meta.time }}</span>
          </div>
        </div>
        <Pill v-if="article.meta.location && article.meta.location.includes('http')" color="blue" :icon="LinkIcon">JOIN</Pill>

        <span v-else>{{ article.meta.location }}</span>

      </div>
    </nuxt-link>
  </article>
</template>
