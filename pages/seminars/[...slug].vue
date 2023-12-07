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
  <div class="w-full bg-gray-100 sticky top-0">
    <div class="flex gap-x-1 py-8 max-w-5xl m-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>

      <span class="cursor-pointer hover:underline underline-offset-4"
        >Go Back</span
      >
    </div>
  </div>
  <div class="py-6 bg-gray-100">
    <div class="p-4 max-w-5xl m-auto">
      <h1 class="text-5xl text-left my-10 font-bold leading-tight" style="">
        {{ data.article.title }}
      </h1>

      <hr class="border-gray-300" />

      <div class="font-normal text-lg my-10">
        <span>
          {{ data.article.description }}
        </span>
      </div>
      <div class="flex mt-8 gap-10">
        <div class="flex items-center gap-1 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>

          <span class="text-xl text-left font-medium" style="">
            {{ convertDate(data.article.date) }}</span
          >
        </div>
        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-xl text-left font-medium" style="">
            {{ data.article.time }}</span
          >
        </div>
        <div class="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <span class="text-xl text-left font-medium" style="">
            {{ data.article.location }}</span
          >
        </div>
      </div>
    </div>
  </div>

  <main id="main" class="mt-10 p-4 max-w-5xl m-auto">
    <div class="grid grid-cols-2 gap-10 w-full max-w-5xl">
      <header v-if="data.article" class="w-full flex flex-col">
        <!-- <li class="" v-for="(tag, i) in data.article.tags" :key="i">
            {{ tag }}
          </li> -->
        <SidebarElement>
          <template #header>Relatori</template>
          <template #default>
            <ul>
              <li class="mb-2" v-for="(p, i) in data.article.people" :key="i">
                <span v-if="p.name">{{ p.name }}</span>
                <span v-else>{{ p }}</span>
                <br />
                <span class="font-semibold" v-if="p.affiliation">{{
                  p.affiliation
                }}</span>
              </li>
            </ul>
          </template>
        </SidebarElement>
        <SidebarElement>
          <template #header>Allegati</template>
          <template #default>
            <ul>
              <li
                class="mb-2"
                v-for="(a, i) in data.article.resources"
                :key="i"
              >
                <a
                  :href="`/resources/${a}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ a }}
                </a>
              </li>
            </ul>
          </template>
        </SidebarElement>

        <SidebarElement>
          <template #header>Video</template>
          <template #default>
            <a
              :href="data.article.video_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ data.article.video_link }}
            </a>
          </template>
        </SidebarElement>
      </header>

      <section class="w-full">
        <article
          class="col-span-full max-w-prose md:col-span-6 md:col-start-1 md:row-start-1 prose md:prose-lg lg:prose-xl prose-gray w-full m-auto prose-a:no-underline"
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
