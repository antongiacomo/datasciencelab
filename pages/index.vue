<script setup lang="ts">
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClockIcon, CalendarIcon } from "@heroicons/vue/24/outline";
import ArticleCard from "~/components/ArticleCard.vue";
import Article from "~/components/Article.vue";

const { fetchArticles, articlesFuture, articlesPast, search } = useArticles();
await fetchArticles();

function monthName(date) {
  return dayjs(date, "DD-MM-YYYY").format("MMMM YYYY");
}
</script>

<template>
  <div>
    <div class="pt-8 px-4 pb-4 bg-blue-100">
      <div class="max-w-5xl mx-auto">
        <div class="mb-10 flex items-center space-x-4">
          <img
            src="/logo.svg"
            alt="CINI Lab on Data Science"
            class="h-16 w-16"
          />
          <h2
            class="text-2xl font-medium hover:underline transition-all duration-300 cursor-pointer"
          >
            CINI Lab on Data Science
          </h2>
        </div>
        <h1 class="text-6xl tracking-wide mx-auto font-black">Seminars</h1>
        <p class="text-2xl mt-1 mb-2">Tales on Data Science and Big Data</p>
        <input
          type="text"
          placeholder="Filter Articles"
          v-model="search"
          class="w-full mt-4 p-4 rounded"
        />
      </div>
    </div>
    <div></div>
    <section>
      <div class="w-full pt-8 max-w-5xl my-4 mx-auto gap-8">
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
