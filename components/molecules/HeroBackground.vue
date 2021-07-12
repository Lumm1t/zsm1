<template>
  <div>
    <!-- bg image -->
    <div
      class="
        absolute
        top-0
        left-0
        bg-hero-image bg-center bg-no-repeat bg-cover
        w-full
        h-full
        filter
        grayscale
      "
    ></div>

    <!-- bg pattern -->
    <div>
      <svg
        class="absolute top-0 left-0 opacity-40 dark:opacity-80 h-full w-full"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          d="M178.04,-0.48 C414.50,75.48 180.30,102.13 638.54,174.17 L546.56,107.06 L500.00,0.00 Z"
          style="stroke: none; fill: rgb(255, 255, 255)"
        ></path>
      </svg>
    </div>

    <!-- bg opacity -->
    <div
      class="
        absolute
        opacity-75
        dark:opacity-95
        w-full
        h-full
        top-0
        left-0
        bg-light-bg
        dark:bg-dark-bg
      "
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
