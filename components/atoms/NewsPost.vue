<template>
  <div
    class="
      flex flex-col
      bg-light-layer
      dark:bg-dark-layer
      rounded-2xl
      shadow-main
      text-light-text
      dark:text-dark-text
      w-full
      h-full
      break-words
      p-6
      justify-between
    "
  >
    <h2 class="text-2xl font-bold">{{ title | truncate(100, '...') }}</h2>

    <p class="text-sm hidden sm:block">
      {{ description | truncate(300, '...') }}
    </p>

    <post-button title="Czytaj dalej" :link="link" class="mt-6" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewsPost',
  filters: {
    truncate(text: string, length: number, suffix: string) {
      return text.length > length
        ? text.slice(0, Math.max(0, length)) + suffix
        : text
    },
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
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
