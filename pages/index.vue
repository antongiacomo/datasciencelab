<script setup lang="ts">
import moment from "moment";
import { ClockIcon, CalendarIcon } from "@heroicons/vue/24/outline";
import ArticleCard from "~/components/ArticleCard.vue";
import Article from "~/components/Article.vue";
// get all the articles inside the content folder
var {data: articles} = await useAsyncData( () => queryContent("seminars").sort({ createdAt: 1 }).find());

var articlesPast = articles.value
  .filter((article) => isPast(article.date))
  .reduce((grouped, object) => {
    const { date } = object;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(object);
    return grouped;
  }, {});

var articlesFuture = articles.value.filter((article) => true /*!isPast(article.date)*/);

function monthName(date) {
  const da = moment(date, "DD-MM-YYYY").toDate();
  return da.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}
</script>

<template>
  <div class="">
    <div class="pt-16 px-4 pb-4 bg-blue-100">
      <h1 class="text-3xl max-w-5xl mb-3 mx-auto font-medium hover:underline transition-all duration-300 cursor-pointer" style="">
        CINI Big Data Lab
      </h1>
      <h1 class="text-6xl max-w-5xl tracking-wide mx-auto font-black" style="">
        Seminars
      </h1>
    </div>
    <section>
      <div class="w-full  px-6 pt-8  max-w-5xl my-4 mx-auto gap-8">
        <div class="flex gap-4 items-center mb-10 text-blue-800">
          <CalendarIcon class="h-8 w-8 stroke-2" />
          <h1 class="text-3xl flex font-black">Upcoming</h1>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        <ArticleCard
          v-for="article in articlesFuture"
          :key="article._path"
          :path="article._path"
          :future="true"
          :title="article.title"
          :tags="article.tags"
          :date="article.date"
          :time="article.time"
          :author="article.author"
          :location="article.location"
          :people="article.people"
        />
      </div>
        <div class="flex gap-4 items-center my-10 text-blue-800">
          <ClockIcon class="h-8 w-8 stroke-2" />
          <h1 class="text-3xl font-black">Past</h1>
        </div>
        <div class="">
          <div class="" v-for="(articlesMonth, date) in articlesPast" :key="date">
            <h1 class="text-xl font-extrabold mt-6 mb-2">
              {{ monthName(date) }}
            </h1>
            <div class="flex flex-col divide-y divide-black">
              <Article
                v-for="article in articlesMonth"
                :key="article._path"
                :path="article._path"

                :title="article.title"
                :tags="article.tags"
                :date="article.date"
                :time="article.time"
                :author="article.author"
                :location="article.location"
                :people="article.people"
                :video_link="article.video_link"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
