<script setup lang="ts">
import moment from "moment";
import { ClockIcon, CalendarIcon } from "@heroicons/vue/24/outline";
import ArticleCard from "~/components/ArticleCard.vue";
import Article from "~/components/Article.vue";


const { fetchArticles, articlesFuture,articlesPast, search } = useArticles();
await fetchArticles();

function monthName(date) {
  return moment(date, "DD-MM-YYYY").format("MMMM YYYY");
}
</script>

<template>
  <div >
    <div class="pt-8 px-4 pb-4 bg-blue-100">
      <div class="max-w-5xl mx-auto">
        <div class="mb-14 flex items-center space-x-4">

       <svg class="w-16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716 516"><path d="M564.244 255.725c0 17.46 14.165 31.709 31.708 31.709 17.542 0 31.708-14.166 31.708-31.709 0-17.542-14.166-31.708-31.708-31.708-17.543 0-31.708 14.166-31.708 31.708ZM466.318 430.245c3.377 0 6.589-.659 9.719-1.647 12.766-4.118 21.99-15.895 21.99-29.979 0-17.46-14.166-31.708-31.709-31.708-17.542 0-31.708 14.166-31.708 31.708 0 14.084 9.224 25.861 21.99 29.979 3.047.988 6.259 1.647 9.718 1.647Z" fill="#FC0101"/><path d="M466.319 144.624c2.964 0 5.847-.577 8.565-1.318 13.342-3.788 23.143-15.813 23.143-30.39 0-14.578-9.554-26.2731-22.567-30.1439-2.882-.906-5.929-1.4825-9.141-1.4825-3.212 0-6.177.5765-9.06 1.4825-13.013 3.9532-22.566 15.8953-22.566 30.1439 0 14.248 9.8 26.602 23.143 30.39 2.717.741 5.6 1.318 8.565 1.318h-.082ZM41.4267 285.704C18.5308 285.704 0 304.235 0 327.131s18.5308 41.426 41.4267 41.426c22.8959 0 41.4268-18.53 41.4268-41.426s-18.5309-41.427-41.4268-41.427Z" fill="#002EAB"/><path d="M179.461 82.7711c22.896 0 41.427-18.5309 41.427-41.4267C220.888 18.4485 202.357 0 179.461 0s-41.427 18.5308-41.427 41.4267c0 22.8959 18.531 41.4268 41.427 41.4268v-.0824Z" fill="#FC0101"/><path d="M663.651 285.869c-11.53 25.943-37.555 43.98-67.699 43.98-42.827 0-77.171-36.32-73.959-79.806 2.718-37.062 33.191-66.629 70.253-68.358 31.708-1.483 59.381 16.966 71.405 43.897h52.134c-8.154-71.158-44.062-134.4925-97.678-180.696-3.459-2.8002-9.472-7.33-18.037-12.601C578.245 19.0252 540.277 1.89442 488.803.247239H331.167s-.247-.08236-.412-.08236h-54.11c-6.094 0-11.036 4.941561-11.036 11.036121v60.6165c0 6.0946 4.942 11.0361 11.036 11.0361h122.057c12.024-26.9315 39.614-45.38 71.323-43.8975 26.519 1.2354 49.58 16.8013 61.604 39.0383 4.777 8.8948 7.907 18.7779 8.648 29.3196.988 12.931-1.482 25.12-6.341 35.991-11.613 25.779-37.474 43.733-67.535 43.733s-56.004-17.954-67.617-43.733v-.247h-62.428v.247H211.417c-6.095 0-11.037 4.942-11.037 11.036v59.958c0 6.095 4.942 11.036 11.037 11.036H336.52l-.164.33h57.075c16.636 0 30.143 13.507 30.143 30.143 0 16.637-13.013 29.567-29.32 30.061-.329 0-.576.083-.823.083H139.434c-6.094 0-11.036 4.941-11.036 11.036v60.451c0 6.095 4.942 11.037 11.036 11.037h259.103c2.059-4.53 4.53-8.895 7.495-12.931 10.377-14.495 25.778-25.037 43.732-29.155 6.424-1.482 13.178-2.141 20.178-1.812 37.062 1.812 67.535 31.379 70.253 68.358.988 12.766-1.4 24.873-6.177 35.662-11.53 25.943-37.474 44.144-67.699 44.144-20.178 0-38.462-8.153-51.804-21.248-6.507-6.424-11.86-14.001-15.731-22.402 0-.082-.082-.247-.165-.329h-72.888c-6.094 0-11.036 4.941-11.036 11.036v64.817c0 6.094 4.942 11.036 11.036 11.036h159.448c65.64-2.142 109.126-29.238 125.598-41.592 5.353-4.365 10.624-8.895 15.73-13.589 10.707-9.966 20.59-20.508 29.65-31.791 32.696-40.685 53.945-89.607 59.793-142.646h-52.299v-.165Z" fill="#002EAB"/></svg>
        <h2
          class="text-2xl  font-medium hover:underline transition-all duration-300 cursor-pointer"

        >
        CINI Lab on Data Science
        </h2>
      </div>
        <h1 class="text-6xl tracking-wide mx-auto font-black">
          Seminars
        </h1>
        <p class="text-2xl mt-1 mb-2">Tales on Data Science and Big Data</p>
        <input type="text" placeholder="Filter Articles" v-model="search" class="w-full mt-4 p-4 rounded" />
      </div>
    </div>
    <div></div>
    <section>
      <div class="w-full px-6 pt-8 max-w-5xl my-4 mx-auto gap-8">
        <div class="flex gap-4 items-center mb-10 text-blue-800">
          <CalendarIcon class="h-8 w-8 stroke-2" />
          <h1 class="text-3xl flex font-black">Upcoming</h1>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
          <ArticleCard
            v-for="article in articlesFuture"
            :key="article._path"
            :article="article"

          />
        </div>
        <div class="flex gap-4 items-center my-10 text-blue-800">
          <ClockIcon class="h-8 w-8 stroke-2" />
          <h1 class="text-3xl font-black">Past</h1>
        </div>
        <div class="">
          <div
            class=""
            v-for="(articlesMonth, date) in articlesPast"
            :key="date"
          >
            <h1 class="text-xl font-extrabold mt-6 mb-2">
              {{ monthName(date) }}
            </h1>
            <div class="flex flex-col divide-y divide-black">
              <Article
                v-for="article in articlesMonth"
                :article="article"
                :key="article._path"

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
