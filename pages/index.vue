<script setup>


// get all the articles inside the content folder
var articles = await queryContent("seminars").sort({ createdAt: 1 }).find();

function isPast(date) {
  console.log(date)
  return (new Date(date)) < (new Date());
}
for (let i = 0; i <10; i++) {
  articles.push(articles[0])
}
var articlesPast = articles.filter( article =>  isPast(article.date) );
var articlesFuture = articles.filter( article =>  !isPast(article.date) );

</script>
<template>

  <div class="">
    <div class="py-20 bg-gray-100">
      <h1 class="text-4xl text-center" style="">SEMINARS</h1>
    </div>
    <section>

      <div
        class="w-full max-w-5xl my-4 mx-auto gap-8"
      >
      <div class="text-3xl">PROSSIMI</div>
        <Article
          v-for="article in articlesFuture"
          :key="article._path"
          :path="article._path"

          :title="article.title"
          :tags="article.tags"
          :date="article.date"
          :time="article.time"
          :author="article.author"
          :location="article.location"
        />
        <div class="text-3xl">TRASCORSI</div>

        <Article
          v-for="article in articlesPast"
          :key="article._path"
          :path="article._path"

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
