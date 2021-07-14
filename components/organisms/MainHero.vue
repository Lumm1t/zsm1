<template>
  <div>
    <div
      class="
        w-full
        h-screen
        max-h-screen
        overflow-hidden
        grid grid-rows-hero2
        lg:grid-rows-hero1
      "
    >
      <div class="mt-32"></div>

      <hero-info />

      <div class="flex self-end mb-32 md:mb-48 lg:mb-28 mt-6">
        <hero-buttons />
      </div>
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
