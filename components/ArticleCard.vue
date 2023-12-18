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
});
</script>

<template>
  <article
    class="rounded-lg w-full my-10 flex items-center antialiased ml-2 pb-4"
  >
    <nuxt-link class="w-96 h-full" :to="path">
      <div
        class="w-full h-full rounded-xl shadow-lg bg-white border-2 border-blue-900 px-6 py-3 pb-6"
      >
        <div class="my-2 text-xl py-0 font-bold leading-tight">
          {{ title }}
        </div>
        <div class="flex gap-2 text-lg text-gray-400 font-medium">
          <div>{{ people.map((person) => person.name).join(", ") }}</div>
        </div>
        <div class="flex mt-4 gap-6 uppercase s">
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
        </div>
        <div
          class="mt-4 flex w-min items-center px-4 gap-1 border border-blue-700 bg-blue-50 rounded-full"
        >
          <svg
            fill="none"
            class="w-4 h-4 text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
          >
            <path
              d="M6 .5v1h1.795L2.88 6.415l.705.705L8.5 2.205V4h1V.5m-1 8h-7v-7H5v-1H1.5C1.23478.5.98043.605357.792893.792893.605357.98043.5 1.23478.5 1.5v7c0 .26522.105357.51957.292893.70711C.98043 9.39464 1.23478 9.5 1.5 9.5h7c.26522 0 .51957-.10536.70711-.29289C9.39464 9.01957 9.5 8.76522 9.5 8.5V5h-1v3.5Z"
              fill="currentColor"
            />
          </svg>

          <div class="text-xl text-left font-medium" style="">
            <span v-if="location.includes('http')">
              <div
                class="uppercase text-base font-semibold text-blue-700"
                :href="location"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partecipa
              </div>
            </span>

            <span v-else>{{ location }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
