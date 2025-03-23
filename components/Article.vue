<script setup lang="ts">
import { CalendarIcon, CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{ article: Article }>();
</script>

<template>
  <nuxt-link class="h-full w-full" :to="article && article.path">
    <article
      class="flex w-full items-center justify-start rounded-lg border border-gray-300 hover:border bg-white hover:border-blue-900 hover:bg-blue-50/90 px-4 antialiased"
    >
      <div class="h-full w-full">
        <div class="h-full w-full rounded-lg  py-2">
          <div
            class="my-2 py-0 text-xl leading-tight font-semibold text-blue-900"
          >
            {{ article && article.title }}
          </div>
          <div class="flex gap-2 text-lg font-medium text-gray-500">
            <div>
              {{
                article?.meta?.people.map((person) => person.name).join(", ")
              }}
            </div>
          </div>
          <div class="mt-4 flex flex-wrap gap-6 uppercase">
            <div class="flex items-center gap-1 font-medium">
              <IconText
              v-if="article.meta.video_link"
              :icon="CalendarIcon"
            >
              <span class="text-left font-medium">
                {{ article.dateFormatted }}
              </span>
              </IconText>
            </div>

            <IconText
              v-if="article.meta.video_link"
              :icon="CheckIcon"
            >
              VIDEO AVAILABLE
            </IconText>
            <IconText v-else :icon="XMarkIcon">
              VIDEO NOT AVAILABLE
            </IconText>
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>
