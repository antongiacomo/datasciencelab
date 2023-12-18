<script setup>
import {
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowLongLeftIcon,
} from "@heroicons/vue/24/outline";
// const { prev, next } = useContent();
const { path } = useRoute();
const router = useRouter();

definePageMeta({
  middleware: [
    function (from, to) {
      // navigateTo("/");
    },
  ],
});

const { data, error } = await useAsyncData(`${path}`, async () => {
  let article = await queryContent().where({ _path: path }).findOne();

  return {
    article,
  };
});

if (error.value) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
  });
}

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
      <ArrowLongLeftIcon class="h-6 w-6" />
      <nuxt-link class="w-full h-full" to="/">
        <span class="hover:underline underline-offset-4">Go Back</span>
      </nuxt-link>
    </div>
  </div>
  <div class="bg-gray-100">
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
          <CalendarIcon class="h-6 w-6 stroke-2" />

          <span class="text-xl text-left font-medium" style="">
            {{ convertDate(data.article.date) }}</span
          >
        </div>
        <div class="flex items-center gap-1">
          <ClockIcon class="h-6 w-6 stroke-2" />
          <span class="text-xl text-left font-medium" style="">
            {{ data.article.time }}</span
          >
        </div>
        <div class="flex items-center gap-1">
          <MapPinIcon class="h-6 w-6 stroke-2" />
          <div class="text-xl text-left font-medium" style="">
            <!-- check if locations contains a link to a web meeting -->
            <span v-if="data.article.location.includes('http')">
              <a
                :href="data.article.location"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online
              </a>
            </span>
            <span v-else>{{ data.article.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main id="main" class="mt-10 p-4 max-w-5xl m-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
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

                <p class="mt-1 text-sm" v-if="p.bio">{{ p.bio }}</p>
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

      <section class="w-full col-span-2">
        <article
          class="col-span-full max-w-prose prose md:prose-lg lg:prose-xl w-full m-auto prose-a:no-underline"
        >
          <ContentRenderer :value="data.article">
            <ContentRendererMarkdown :value="data.article" />
          </ContentRenderer>
        </article>
      </section>
    </div>
    <!-- <div>
      <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
      <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
    </div> -->
    <!-- previous and Next blogs -->
    <!-- <PreviousNext :prev="prev" :next="next" /> -->
  </main>
</template>
