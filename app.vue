<script setup>
// get all the articles inside the content folder
const articles = await queryContent("seminars").sort({ createdAt: 1 }).find();
</script>
<template>
  <div>
    <div class="py-20">
    <h1 class="text-2xl text-center">Blog built with Nuxt and Nuxt Content</h1>
  </div>
    <section>
      <div class="w-4/5 my-4 mx-auto flex flex-wrap">
        <Article
          v-for="article in articles"
          :key="article._path"
          :path="article._path"
          :img="article.imgurl"
          :title="article.subtitle"
          :tags="article.tags"
          :date="article.createdAt"
          :author="article.author"
        />
      </div>
    </section>
  </div>
</template>
