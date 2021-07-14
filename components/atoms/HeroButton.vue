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
      text-light-text-text
      dark:text-dark-text
      hover:text-primary
      focus:text-primary focus:outline-none
      shadow-main
    "
    tabindex="0"
  >
    <span class="transition-colors duration-200 ease-in-out">
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
