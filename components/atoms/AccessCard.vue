<template>
  <a
    :href="link"
    class="
      w-full
      h-full
      overflow-hidden
      bg-light-layer
      dark:bg-dark-layer
      rounded-3xl
      flex flex-col
      justify-around
      items-center
      transform
      hover:-translate-y-3
      focus:-translate-y-3
      transition-transform
      duration-300
      focus:outline-none
      shadow-main
      p-3
    "
  >
    <img
      v-if="image"
      class="object-contain w-32 h-32"
      :src="image"
      :alt="title"
    />

    <p
      v-if="title"
      class="
        text-center text-sm
        font-semibold
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
