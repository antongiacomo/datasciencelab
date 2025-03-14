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

const classObject = reactive({
  'bg-red-200': props.color =="red",
  'border-red-600': props.color == "red",

  'text-red-800': props.color == "red",


  'bg-green-200': props.color == "green",
  'border-green-600': props.color == "green",
  'text-green-800': props.color == "green",

  'bg-blue-200': props.color == "blue",
  'border-blue-600': props.color == "blue",
  'text-blue-800': props.color == "blue",

})
</script>
<template>
  <div
    class="flex w-min whitespace-nowrap items-center gap-1 font-semibold border rounded-full px-4 py-1 text-sm"
  
    :class=classObject
  >
    <icon class="h-4 w-4 stroke-2" />
    <span><slot></slot></span>
  </div>
</template>
