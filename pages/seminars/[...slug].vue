<script setup>
import {
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowLongLeftIcon,
  PlayCircleIcon,
  PaperClipIcon,
  AcademicCapIcon,
  LinkIcon
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
</script>
<template>
  <div class="w-full bg-blue-100  sticky top-0 z-10">
    <div class="flex gap-x-1 py-4 max-w-5xl m-auto">
      <ArrowLongLeftIcon class="h-6 w-6" />
      <nuxt-link class="w-full h-full" to="/">
        <span class="hover:underline underline-offset-4">Go Back</span>
      </nuxt-link>
    </div>
  </div>
  <div class="bg-blue-100 py-10  relative md:sticky md:top-0 z-0">
    <div class="p-4 max-w-5xl m-auto">
      <h1 class="text-5xl text-left font-bold leading-tight" style="">
        {{ data.article.title }}
      </h1>

      <hr class="my-10 border-black" />

      <div class="font-normal text-lg my-10">
        <div>
          {{ data.article.description }}
        </div>
      </div>
      <div class="flex flex-wrap mt-8 gap-10">
        <div class="flex items-center gap-1 font-medium">
          <CalendarIcon class="h-6 w-6 stroke-2" />

          <span class="text-xl text-left font-medium uppercase" style="">
            {{ convertDate(data.article.date) }}</span
          >
        </div>
        <div v-if="!isPast(data.article.date)" class="flex items-center gap-1">
          <ClockIcon class="h-6 w-6 stroke-2" />
          <span class="text-xl text-left font-medium" style="">
            {{ data.article.time }}</span
          >
        </div>
        <div v-if="!isPast(data.article.date)" class="flex items-center gap-1">
          <MapPinIcon class="h-6 w-6 stroke-2" />
          <div class="text-xl text-left font-medium" style="">
            <!-- check if locations contains a link to a web meeting -->
            <div v-if="data.article.location.includes('http')">
              <nuxt-link
                :href="data.article.location"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online
              </nuxt-link>
            </div>
            <span v-else>{{ data.article.location }}</span>
          </div>
        </div>
        <div v-if="data.article.video_link">
          <nuxt-link

            :href="data.article.video_link"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Pill :icon="LinkIcon" :video_link="data.article.video_link"></Pill>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <main id="main" class="mt-10 p-4 mx-auto">
    <div class="gap-10 w-full ">
      <header v-if="data.article" class="w-full flex flex-col">
        <!-- <li class="" v-for="(tag, i) in data.article.tags" :key="i">
            {{ tag }}
          </li> -->
      </header>

      <section class="mx-auto max-w-4xl">
        <article
          class="col-span-full max-w-prose prose md:prose-lg lg:prose-xl  prose-a:no-underline"
        >
          <ContentRenderer :value="data.article">
            <ContentRendererMarkdown :value="data.article" />
          </ContentRenderer>
        </article>
        <div class="mt-20 mx-auto">
          <SidebarElement>
            <template #header><div class="flex items-center gap-1 text-blue-800"><PaperClipIcon class="h-7 w-7"  />Allegati</div></template>
            <template #default>
              <ul>
                <li
                  class="mb-2"
                  v-for="(a, i) in data.article.resources"
                  :key="i"
                >
                  <nuxt-link
                    :href="`/resources/${a}`"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ a }}
                  </nuxt-link>
                </li>
              </ul>
            </template>
          </SidebarElement>
          <SidebarElement>
            <template #header><div class="flex items-center gap-2 text-blue-800"><AcademicCapIcon class="w-7 h-7 "></AcademicCapIcon>Relatori</div></template>
            <template #default>
              <ul>
                <li class="mb-4" v-for="(p, i) in data.article.people" :key="i">
                 <Bio :person="p"></Bio>
                </li>
              </ul>
            </template>
          </SidebarElement>
        </div>
      </section>
    </div>
  </main>
</template>
