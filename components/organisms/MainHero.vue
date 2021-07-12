<template>
  <div>
    <hero-background />

    <div
      class="
        w-full
        h-screen
        max-h-screen
        overflow-hidden
        grid grid-rows-hero2
        md:grid-rows-hero1
      "
    >
      <div></div>

      <hero-info />

      <hero-buttons />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
