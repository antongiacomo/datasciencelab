<script setup lang="ts">
const { data } = await useAsyncData('page-data', () => queryContent('/hello').findOne())
</script>

<template>
  <main>
    <ContentRenderer :value="data">
      <template #empty>
        <p>No content found.</p>
      </template>

    </ContentRenderer>
  </main>
</template>
