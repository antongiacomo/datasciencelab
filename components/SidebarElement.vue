<script setup>
import {

  PaperClipIcon
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="my-10">
    <p class="text-2xl spacing tracking-wide uppercase font-semibold mb-4">
      <slot name="header"></slot>
    </p>
    <slot></slot>
    <!-- <hr class="my-2"/> -->
  </div>
</template>