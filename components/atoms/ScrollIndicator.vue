<template>
  <button
    aria-label="Scroll down"
    class="
      animate-bounce
      hidden
      sm:flex
      items-center
      hover:bg-primary
      focus:bg-primary
      justify-center
      w-10
      h-10
      text-light-text
      dark:text-dark-text
      duration-300
      transform
      border border-dark-layer
      dark:border-light-layer
      rounded-full
      cursor-pointer
      outline-none
      focus:outline-none
      absolute
      left-0
      right-0
      mx-auto
      bottom-6
      z-30
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
    >
      <path
        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
      ></path>
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ScrollIndicator',
})
</script>
