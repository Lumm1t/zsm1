<template>
  <a
    :href="link"
    class="
      w-full
      h-full
      overflow-hidden
      bg-light-layer
      dark:bg-dark-layer
      bg-opacity-70
      rounded-2xl
      flex flex-col
      justify-center
      items-center
      transform
      hover:-translate-y-3
      focus:-translate-y-3
      transition-transform
      duration-300
      focus:outline-none
      shadow-main
    "
  >
    <img
      v-if="image"
      class="object-contain w-36 h-36"
      :src="image"
      :alt="title"
    />

    <p
      v-if="title"
      class="
        text-center text-xs
        font-bold
        m-2
        text-light-text
        dark:text-dark-text
      "
    >
      {{ title }}
    </p>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccessCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    image: {
      type: String,
      default: '',
    },
  },
})
</script>
