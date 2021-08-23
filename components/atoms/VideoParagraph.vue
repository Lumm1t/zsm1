<template>
  <p
    class="text-lg lg:text-4xl font-medium text-light-text dark:text-dark-text"
  >
    W zakresie kształcenia zawodowego realizujemy nauczanie w zawodach
    <a
      href="https://zsm1.bydgoszcz.pl/strony/rekrutacja/"
      class="
        outline-none
        focus:outline-none
        bg-gradient-to-r
        from-black
        to-black
        dark:from-white dark:to-white
        bg-right-bottom bg-no-repeat bg-underline-from
        hover:bg-underline-to
        focus:bg-underline-to
        transition-all
        duration-700
        ease-out
        hover:text-primary
        focus:text-primary
      "
      @mouseenter="playVideo"
      @focus="playVideo"
      @mouseleave="pauseVideo"
      @blur="pauseVideo"
    >
      dostosowanych do regionalnego rynku pracy</a
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
