<template>
  <a
    :href="link"
    class="
      block
      text-center
      bg-light-layer
      dark:bg-dark-layer
      rounded-full
      py-3
      px-6
      font-bold
      bg-opacity-70
      focus:outline-none
    "
    style="box-shadow: 0 6px 2px -2px rgb(0, 0, 0, 0.2)"
  >
    <span class="relative text-light-text-text dark:text-dark-text">
      {{ title }}
    </span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
  },
})
</script>
