<template>
  <article class="rounded-lg w-full flex items-center antialiased ml-2">
    <nuxt-link class="w-full h-full" :to="path">
      <div class="w-full h-full rounded-lg bg-white px-8 py-4">
        <div class="my-2 text-xl py-0 font-semibold leading-tight">
          {{ title }}
        </div>
        <div class="flex mt-4 gap-6 uppercase text-gray-600">
          <div class="flex items-center gap-1 font-medium ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>

            <span class="text-left font-medium" style="">
              {{ convertDate(date) }}</span
            >
          </div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-left font-medium" style=""> {{ time }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <span class="text-left font-medium" style=""> {{ location }}</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </article>
  <hr class="my-4" />
</template>
bìmt-4
<script setup>
defineProps({
  path: String,
  title: String,
  tags: Object,
  date: String,
  time: String,
  author: String,
  location: String,
});

function convertDate(date) {
  const da = new Date(date);
  return da.toLocaleString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
