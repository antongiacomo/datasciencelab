
<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();

  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});
const [prev, next] = data.value.surround;

useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: `${data.value.imgurl}`,
      property: `${data.value.imgurl}`,
    },
  ],
});


</script>
<template>
  <main id="main" class=" p-4 max-w-5xl m-auto">
    <header v-if="data.article" class="p-4 py-6 ">
      <h1 class="font-extrabold text-4xl">
        {{ data.article.title }}
      </h1>
      <div class="flex flex-wrap  font-medium text-lg my-3">
        <span>
          {{ data.article.description }}
        </span>
      </div>

      <ul class="article-tags">
        <li class="" v-for="(tag, i) in data.article.tags" :key="i">
          {{ tag }}
        </li>
      </ul>
    </header>
    <Hr />
    <section class="grid grid-cols-8 mb-2">
      <article class="col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto">
        <ContentRenderer :value="data.article">
          <ContentRendererMarkdown :value="data.article" />
        </ContentRenderer>
      </article>
    </section>

    <!-- previous and Next blogs -->
    <PreviousNext :prev="prev" :next="next" />
    <Hr />
  </main>
</template>


<!--


.article[data-v-2c96bb26] :where(ul > li):not(:where([class~="not-prose"] *)) {
  @apply text-base;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)) {
  @apply no-underline text-2xl;
}
.article[data-v-02b6418b] :where(a):not(:where([class~="not-prose"] *)):hover {
  @apply underline;
}
</style> -->