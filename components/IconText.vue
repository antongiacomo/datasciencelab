<script setup>
const props = defineProps({
  icon: Function,
  color: String,
});
</script>
<template>
  <div
    class="flex w-min items-center gap-1 whitespace-nowrap"
  >
    <icon class="size-6 stroke-2" />
    <span><slot></slot></span>
  </div>
</template>
