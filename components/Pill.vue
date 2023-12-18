<script setup>
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  video_link: String,
});
</script>
<template>
  <div
    v-if="video_link"
    class="flex items-center gap-1 bg-green-200 border-green-600 font-semibold text-green-800 border rounded-full px-4 py-1 text-sm"
  >
    <CheckIcon class="h-4 w-4 stroke-2" />
    <span>VIDEO DISPONIBILE</span>
  </div>
  <div
    v-else
    class="flex items-center gap-1 bg-red-200 border-red-600 font-semibold text-red-800 border rounded-full px-4 py-1 text-sm"
  >
    <XMarkIcon class="h-4 w-4 stroke-2" />
    <span>VIDEO NON DISPONIBILE</span>
  </div>
</template>
