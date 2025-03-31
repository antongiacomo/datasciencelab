<script setup>
import { PaperClipIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="my-10">
    <div class="text-2xl spacing tracking-wide uppercase font-semibold mb-4">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>