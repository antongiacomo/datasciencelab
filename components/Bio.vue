<script setup lang="ts">
const props = defineProps({
  person: Object,
});
</script>

<template>

  <span class="font-semibold text-xl " v-if="person?.name" :id="person?.name">{{
    person.name
  }}</span>
  <span v-else>{{ person }}</span>
  <br />
  <span class="font-semibold" v-if="person?.affiliation">{{
    person.affiliation
  }}</span>

  <p class="mt-2 mb-8 text-gray-700" v-if="person?.bio">{{ person.bio }}</p>

</template>
