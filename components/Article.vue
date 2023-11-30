<template>

    <article
      class=" w-full flex items-center antialiased ml-2 transform transition duration-500 ease-in-out hover:scale-105"
    >
      <nuxt-link class="w-full  h-full" :to="path">

          <div class="w-full h-full  bg-white  px-8 py-4 rounded-lg shadow-lg">
            <!-- <div class="flex items-baseline">
              <ul>
                <li
                  v-for="tag in tags"
                  :key="tag"
                  class="inline-block bg-gray-200 rounded-full text-xs px-2 py-0.5 mr-2 mb-1 uppercase leading-relaxed"
                >
                  {{ tag }}
                </li>
              </ul>
            </div> -->
            <div class="mb-4 flex items-center  justify-between leading-relaxed">
              <p class="text-sm uppercase">{{ convertDate(date) }}</p>
              <p class="text-sm uppercase">{{time}}</p>
            </div>
            <div class="my-2 py-0 font-semibold leading-tight">
              {{ title }}
            </div>
          </div>

      </nuxt-link>
    </article>

</template>

<script setup>
defineProps({
  path: String,
  title: String,
  tags: Object,
  date: String,
  time: String,
  author: String,
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
<style>
.img {
  width: 400px;
  height: 250px;
}
</style>
