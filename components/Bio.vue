<script setup lang="ts">
const props = defineProps({
  person: Object,
});
</script>

<template>
  <span class="font-semibold text-xl" v-if="person?.name" :id="person?.name">{{
    person.name
  }}</span>
  <span v-else>{{ person }}</span>
  <br />
  <span class="font-semibold" v-if="person?.affiliation">{{
    person.affiliation
  }}</span>
  <br />
  <a
    v-if="person?.homepage"
    :href="person.homepage"
    class="mt-1 flex items-center gap-1 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="size-5"
    >
      <path
        d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
      />
      <path
        d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
      />
    </svg>

    HOMEPAGE
  </a>

  <p class="mt-2 mb-8 text-gray-700" v-if="person?.bio">{{ person.bio }}</p>
</template>
