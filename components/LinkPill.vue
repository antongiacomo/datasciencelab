<script setup>
import { CheckIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  video_link: String,
  icon: Object,
});
</script>
<template>
  <div
    v-if="video_link"
    class="flex items-center gap-1 bg-green-200 border-green-600 font-semibold text-green-800 border rounded-full px-4 py-1 text-sm"
  >
    <icon class="h-4 w-4 stroke-2" />
    <span>VIDEO</span>
  </div>

</template>
