<template>
  <div>
    <div class="w-full h-screen max-h-screen overflow-hidden">
      <div class="w-full h-full grid grid-rows-hero2 lg:grid-rows-hero1">
        <div class="mt-20"></div>

        <hero-info />

        <hero-buttons />
      </div>

      <hero-side />

      <scroll-indicator />

      <hero-background />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
