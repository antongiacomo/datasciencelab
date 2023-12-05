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

function convertDate(date) {
  const da = new Date(date);
  return da.toLocaleString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
<template>
  <div class="">
    <div class="py-16 bg-gray-100">
      <div class="p-4 max-w-5xl m-auto">
        <h1 class="text-4xl text-left" style="">{{ data.article.title }}</h1>

        <div class="flex gap-x-4 mt-8">
          <span class="text-2xl text-left" style="">
            {{ convertDate(data.article.date) }}</span
          >
          <span class="text-2xl text-left" style="">
            {{ data.article.time }}</span
          >
          <span class="text-2xl text-left" style="">
            {{ data.article.location }}</span
          >
        </div>
      </div>
    </div>
  </div>
  <main id="main" class="p-4 max-w-5xl m-auto">
    <div class="flex flex-wrap font-medium text-lg my-3">
      <span>
        {{ data.article.description }}
      </span>
    </div>
    <div class="flex w-full max-w-5xl gap-x-4">
      <header v-if="data.article" class="w-1/3 py-6">
        <!-- <li class="" v-for="(tag, i) in data.article.tags" :key="i">
            {{ tag }}
          </li> -->
        <p class="text-3xl spacing tracking-wide font-semibold mt-4 mb-2">
          Relatori
        </p>
        <hr class="mb-4" />
        <ul>
          <li class="mb-2" v-for="(p, i) in data.article.people" :key="i">
            <span v-if="p.name">{{ p.name }}</span>
            <span v-else>{{ p }}</span>
            <br />
            <span class="font-semibold" v-if="p.affiliation">{{ p.affiliation }}</span>
          </li>
        </ul>

        <p class="text-3xl spacing tracking-wide font-semibold mt-4 mb-2">
          Allegati
        </p>
        <hr class="mb-4" />
        <ul>
          <li class="mb-2" v-for="(a, i) in data.article.resources" :key="i">
            <a href="/resources/file.epub" target="_blank" rel="noopener noreferrer">
              {{ a }}
            </a>
          </li>

        </ul>

        <p class="text-3xl spacing tracking-wide font-semibold mt-4 mb-2">
          Video
        </p>
        <hr class="mb-4" />
        <a :href="data.article.video_link" target="_blank" rel="noopener noreferrer">
          {{ data.article.video_link }}
          <!-- {data.article.video_link.split('/')[3].split("&")[0]} -->


          <!-- <iframe :src="`https://www.youtube-nocookie.com/embed/${l}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
        </a>
      </header>
      <section class="w-2/3 grid mb-2">
        <article
          class="col-span-full max-w-prose md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 m-auto"
        >
          <ContentRenderer :value="data.article">
            <ContentRendererMarkdown :value="data.article" />
          </ContentRenderer>
        </article>
      </section>
    </div>

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
