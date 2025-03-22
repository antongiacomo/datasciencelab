<script setup lang="ts">
import { CalendarIcon, CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{ article: Article }>();
</script>

<template>
  <nuxt-link class="h-full w-full" :to="article && article.path">
    <article
      class="flex w-full items-center justify-start rounded-lg border px-6 py-2 antialiased"
    >
      <div class="h-full w-full">
        <div class="h-full w-full rounded-lg bg-white py-4">
          <div class="my-2 py-0 text-xl leading-tight font-semibold">
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
              <CalendarIcon class="h-6 w-6 stroke-2" />
              <span class="text-left font-medium">
                {{ article.dateFormatted }}
              </span>
            </div>
            <Pill v-if="article.meta.video_link" color="green" :icon="CheckIcon"
              >VIDEO AVAILABLE</Pill
            >
            <Pill v-else color="red" :icon="XMarkIcon"
              >VIDEO NOT AVAILABLE</Pill
            >
          </div>
        </div>
      </div>
    
    </article>
  </nuxt-link>
</template>
