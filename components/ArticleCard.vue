<script setup lang="ts">
import { ClockIcon, CalendarIcon, LinkIcon } from "@heroicons/vue/24/outline";

defineProps<{ article: Article }>();
</script>

<template>
  <article class="flex w-full items-center rounded-lg pb-4 antialiased">
    <nuxt-link class="h-full w-full" :to="article && article.path">
      <div
        class="flex h-full w-full flex-col justify-between rounded-xl border border-gray-200 bg-white px-6 py-3 pb-6 shadow-xl transition-colors hover:border hover:border-blue-900 hover:bg-blue-50/90 hover:shadow-lg"
      >
        <div class="my-2 py-0 text-2xl leading-tight font-bold">
          {{ article.title }}
        </div>
        <div class="flex gap-2 text-lg font-medium text-gray-500">
          <div>
            {{ article.meta.people.map((person) => person.name).join(", ") }}
          </div>
        </div>
        <div>
          <div class="s my-4 flex gap-6 uppercase">
            <div class="flex items-center gap-1 font-medium">
              <CalendarIcon class="h-6 w-6 stroke-2" />

              <span class="text-left font-medium">
                {{ article.dateFormatted }}</span
              >
            </div>
            <div class="flex items-center gap-1">
              <ClockIcon class="h-6 w-6 stroke-2" />
              <span class="text-left font-medium">
                {{ article.meta.time }}</span
              >
            </div>
          </div>
          <Pill
            v-if="
              article.meta.location && article.meta.location.includes('http')
            "
            color="blue"
            :icon="LinkIcon"
          >
            JOIN</Pill
          >

          <span v-else>{{ article.meta.location }}</span>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
