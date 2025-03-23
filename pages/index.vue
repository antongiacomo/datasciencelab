<script setup lang="ts">
import {
  ClockIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import ArticleCard from "~/components/ArticleCard.vue";
import Article from "~/components/Article.vue";

const { fetchArticles, articlesFuture, articlesPast, search } = useArticles();

const articles = fetchArticles();
</script>

<template>
  <div>
    <div
      class="bg-linear-to-r from-blue-950 to-blue-800 px-4 pt-8 pb-4 text-white"
    >
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 flex items-center justify-start space-x-4">
          <img
            src="/logo-white.svg"
            alt="CINI Lab on Data Science"
            class="h-16 w-16"
          />

          <h2
            class="cursor-pointer text-2xl font-medium transition-all duration-300 hover:underline"
          >
            CINI Lab on Data Science
          </h2>
        </div>
        <h1 class="mx-auto mb-4 text-2xl font-medium tracking-wide uppercase">
          Seminars
        </h1>
        <p class="mt-1 mb-2 text-5xl font-bold">
          Tales on Data Science and Big Data
        </p>
        <!-- <input type="text" placeholder="Filter Articles" v-model="search" class="w-full mt-4 p-4 bg-white text-blue-950 rounded-2xl" /> -->

        <form class="flex w-full items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative mt-6 w-full">
            <div
              class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
            >
              <MagnifyingGlassIcon
                class="size-6 stroke-2 text-gray-500 dark:text-gray-400"
              />
            </div>
            <input
              v-model="search"
              type="text"
              id="simple-search"
              class="block w-full rounded-xl border border-gray-300 bg-gray-50 p-4 ps-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search branch name..."
              required
            />
          </div>
        </form>
      </div>
    </div>

    <section>
      <div class="mx-auto my-4 w-full max-w-5xl gap-8 px-4 pt-8 lg:px-0">
        <div class="mb-10 flex items-center gap-4 text-blue-950">
          <CalendarIcon class="h-8 w-8 stroke-2" />
          <h1 class="flex text-3xl font-bold">Upcoming</h1>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ArticleCard
            v-for="article in articlesFuture"
            :key="article.path"
            :article="article"
          />
        </div>
        <div class="mt-10 mb-4 flex items-center gap-4 text-blue-950">
          <ClockIcon class="h-8 w-8 stroke-2" />
          <h1 class="text-3xl font-bold ">Past</h1>
        </div>
        <div>
          <div class="flex flex-col">
            <div v-for="articlesMonth in articlesPast" :key="date">
              <h1 class="text-blue-950 mt-6 mb-2 text-xl font-extrabold">
                {{ articlesMonth.monthName }}
              </h1>

              <Article
                v-for="article in articlesMonth.articles"
                :article="article"
                :key="article.path"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
