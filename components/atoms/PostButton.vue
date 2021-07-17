<template>
  <nuxt-link
    :to="link"
    class="
      rounded-full
      bg-light-layer
      dark:bg-dark-layer
      w-28
      p-2
      text-center
      shadow-main
      text-light-text-text
      dark:text-dark-text
      hover:text-primary
      focus:text-primary
      dark:hover:text-primary dark:focus:text-primary
      focus:outline-none
      transition-colors
      duration-200
      ease-in-out
    "
  >
    {{ title }}
  </nuxt-link>
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
