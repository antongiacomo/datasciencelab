<script setup>
const props = defineProps({
icon: Function,
  color: String,
});
const classObj = computed(() => {
  return {
    [`bg-${props.color}-200`]: true,
    [`border-${props.color}-600`]: true,
    [`text-${props.color}-800`]: true,
  };
});
</script>
<template>
  <div
    class="flex w-min whitespace-nowrap items-center gap-1 font-semibold border rounded-full px-4 py-1 text-sm"
    :class="classObj"
  >
    <icon class="h-4 w-4 stroke-2" />
    <span><slot></slot></span>
  </div>
</template>
