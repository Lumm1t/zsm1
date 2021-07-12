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
      <div></div>

      <hero-info />

      <hero-side />

      <hero-buttons />
    </div>

    <scroll-indicator />

    <hero-background />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
