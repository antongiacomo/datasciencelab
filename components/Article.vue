<script setup>
import { CalendarIcon,CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  path: String,
  title: String,
  tags: Object,
  date: String,
  author: String,
  location: String,
  future: Boolean,
  people: Array,
  video_link: String,
});
</script>
<template>
  <nuxt-link class="w-full h-full" :to="path">
    <article class="w-full flex items-center justify-start antialiased">
      <div class="w-full h-full" :to="path">
        <div
          class="w-full h-full rounded-lg bg-white py-4"

        >
          <div class="my-2 text-xl py-0 font-semibold leading-tight">
            {{ title }}
          </div>
          <div class="flex gap-2 text-lg text-gray-500 font-medium">
            <div>{{ people.map((person) => person.name).join(", ") }}</div>
          </div>
          <div class="flex flex-wrap  mt-4 gap-6 uppercase">
            <div class="flex items-center gap-1 font-medium">
              <CalendarIcon class="h-6 w-6 stroke-2" />

              <span class="text-left font-medium">
                {{ convertDate(date) }}</span
              >
            </div>
            <Pill v-if="video_link" color="green" :icon="CheckIcon">VIDEO AVAILABLE</Pill>
            <Pill v-else color="red" :icon="XMarkIcon">VIDEO NOT AVAILABLE</Pill>


          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>
