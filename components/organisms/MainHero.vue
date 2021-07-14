<template>
  <div class="w-full h-screen max-h-screen overflow-hidden">
    <div class="w-full h-full grid grid-rows-heroinfo">
      <div class="mt-16 sm:mt-24"></div>

      <hero-info />

      <hero-buttons />
    </div>

    <hero-side />

    <scroll-indicator />

    <hero-background />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
