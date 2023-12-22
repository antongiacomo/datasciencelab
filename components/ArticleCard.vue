<script setup>
import { ClockIcon, CalendarIcon, LinkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  path: String,
  title: String,
  tags: Object,
  date: String,
  time: String,
  author: String,
  location: String,
  future: Boolean,
  people: Array,
});
</script>

<template>
  <article
    class="rounded-lg w-full flex items-center antialiased  pb-4"
  >
    <nuxt-link class="w-full h-full" :to="path">
      <div
        class="w-full h-full rounded-xl shadow-lg bg-white border-2 border-blue-900 px-6 py-3 pb-6"
      >
        <div class="my-2 text-xl py-0 font-bold leading-tight">
          {{ title }}
        </div>
        <div class="flex gap-2 text-lg text-gray-500 font-medium">
          <div>{{ people.map((person) => person.name).join(", ") }}</div>
        </div>
        <div class="flex my-4 gap-6 uppercase s">
          <div class="flex items-center gap-1 font-medium">
            <CalendarIcon class="h-6 w-6 stroke-2" />

            <span class="text-left font-medium" style="">
              {{ convertDate(date) }}</span>
          </div>
          <div class="flex items-center gap-1">
            <ClockIcon class="h-6 w-6 stroke-2" />
            <span class="text-left font-medium" style=""> {{ time }}</span>
          </div>
        </div>
        <Pill v-if="location.includes('http')" color="blue" :icon="LinkIcon">JOIN</Pill>

        <span v-else>{{ location }}</span>

      </div>
    </nuxt-link>
  </article>
</template>
