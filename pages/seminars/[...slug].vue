<script setup>
import {
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowLongLeftIcon,
  PaperClipIcon,
  AcademicCapIcon,
  LinkIcon,
} from "@heroicons/vue/24/outline";
import { useElementVisibility } from "@vueuse/core";
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

const target = ref(null);
const targetIsVisible = useElementVisibility(target);

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
  <div class="w-full bg-blue-100 sticky top-0 z-10">
    <div class="max-w-5xl m-auto flex gap-8 items-center py-4">
      <div class="flex gap-x-1">
        <ArrowLongLeftIcon class="size-6 shrink-0" />
        <nuxt-link class="w-full h-full shrink-0" to="/">
          <span class="hover:underline underline-offset-4">Go Back</span>
        </nuxt-link>
      </div>
      <div
        v-if="!targetIsVisible"
        class="hover:underline underline-offset-4 text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap"
      >
        {{ data.article.title }}
      </div>
    </div>
  </div>
  <div class="bg-blue-100 py-10">
    <div class="p-4 max-w-5xl m-auto">
      <h1 class="text-5xl text-left font-bold leading-tight" ref="target">
        {{ data.article.title }}
      </h1>
      <div class="mt-2 flex gap-2 text-xl text-gray-500 font-medium">
        <div>
          <nuxt-link
            v-for="(person, key) in data.article.people"
            :href="`#${person.name}`"
          >
            <span v-if="key != 0">,</span> {{ person.name }}
          </nuxt-link>
        </div>
      </div>
      <hr class="my-8 border-black" />

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
          <nuxt-link
            v-if="
              data.article.location && data.article.location.includes('http')
            "
            :href="data.article.location"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Pill color="blue" :icon="LinkIcon">JOIN</Pill>
          </nuxt-link>

          <span v-else>{{ data.article.location }}</span>
        </div>
        <div v-if="data.article.video_link">
          <nuxt-link
            :href="data.article.video_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Pill color="green" :icon="LinkIcon">VIDEO</Pill>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <main id="main" class="mt-10 p-4 mx-auto">
    <div class="gap-10 w-full">
      <header v-if="data.article" class="w-full flex flex-col">
        <!-- <li class="" v-for="(tag, i) in data.article.tags" :key="i">
            {{ tag }}
          </li> -->
      </header>

      <section class="mx-auto max-w-4xl">
        <article
          class="col-span-full max-w-prose prose md:prose-lg lg:prose-xl prose-a:no-underline"
        >
          <ContentRenderer :value="data.article">
            <ContentRendererMarkdown :value="data.article" />
          </ContentRenderer>
        </article>
        <div class="mt-20 mx-auto">
          <SidebarElement v-if="!data.article.resources">
            <template #header
              ><div class="flex items-center gap-1 text-blue-800">
                <PaperClipIcon class="h-7 w-7" />Attachments
              </div></template
            >
            <template #default>
              <ul>
                <li
                  class="my-4"
                  v-for="(a, i) in data.article.resources"
                  :key="i"
                >
                  <nuxt-link
                    :href="`/resources/${a}`"
                    target="_blank"
                    class="hover:underline underline-offset-4"
                    rel="noopener noreferrer"
                  >
                    Attachment {{ i + 1 }}
                  </nuxt-link>
                </li>
              </ul>
            </template>
          </SidebarElement>
          <SidebarElement>
            <template #header
              ><div class="flex items-center gap-2 text-blue-800">
                <AcademicCapIcon class="w-7 h-7"></AcademicCapIcon>Speakers
              </div></template
            >
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
