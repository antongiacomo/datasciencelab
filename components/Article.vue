<script setup>
import { ClockIcon, CalendarIcon } from "@heroicons/vue/24/outline";
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
  video_link: String
});
</script>
<template>
  <article class="w-full flex items-center justify-start antialiased">
    <nuxt-link class="w-full h-full" :to="path">
      <div
        class="w-full h-full rounded-lg bg-white py-4"
        :class="{ 'text-indigo-400': future }"
      >
        <div class="my-2 text-xl py-0 font-semibold leading-tight">
          {{ title }}
        </div>
        <div class="flex gap-2 text-lg text-gray-400 font-medium">
          <div>{{ people.map((person) => person.name).join(", ") }}</div>
        </div>
        <div class="flex mt-4 gap-6 uppercase">
          <div class="flex items-center gap-1 font-medium">
            <CalendarIcon class="h-6 w-6 stroke-2" />

            <span class="text-left font-medium" style="">
              {{ convertDate(date) }}</span
            >
          </div>

          <div class="flex items-center gap-1">
            <ClockIcon class="h-6 w-6 stroke-2" />
            <span class="text-left font-medium" style=""> {{ time }}</span>
          </div>
          <Pill :video_link="video_link"></Pill>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
