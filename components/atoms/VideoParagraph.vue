<template>
  <p class="text-lg md:text-4xl medium text-light-text dark:text-dark-text">
    W zakresie kształcenia zawodowego realizujemy nauczanie w zawodach
    <span
      class="
        bg-gradient-to-r
        from-black
        to-black
        dark:from-white dark:to-white
        bg-right-bottom bg-no-repeat bg-underline-from
        hover:bg-underline-to
        transition-all
        duration-700
        ease-out
        hover:text-primary
        cursor-pointer
      "
      @mouseenter="playVideo"
      @mouseleave="pauseVideo"
    >
      dostosowanych do regionalnego rynku pracy</span
    >, posiadamy bogatą bazę dydaktyczną pozwalającą skutecznie kształcić
    specjalistów.
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VideoParagraph',
  methods: {
    playVideo() {
      this.$nuxt.$emit('play-video')
    },
    pauseVideo() {
      this.$nuxt.$emit('pause-video')
    },
  },
})
</script>
