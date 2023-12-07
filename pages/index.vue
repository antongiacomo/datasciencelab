<script setup>
// get all the articles inside the content folder
var articles = await queryContent("seminars").sort({ createdAt: 1 }).find();
for (let i = 0; i <10; i++) {
  articles.push(articles[0])
}

</script>
<template>
  <div class="">
    <div class="py-20 bg-gray-100">
      <h1 class="text-4xl text-center" style="">SEMINARS</h1>
    </div>
    <section>
      <div
        class="w-full max-w-4xl my-4 mx-auto gap-8 auto-rows-fr auto-cols-fr"
      >
        <Article
          v-for="article in articles"
          :key="article._path"
          :path="article._path"
          :img="article.imgurl"
          :title="article.title"
          :tags="article.tags"
          :date="article.date"
          :time="article.time"
          :author="article.author"
          :location="article.location"
        />

      </div>

    </section>
  </div>
</template>
