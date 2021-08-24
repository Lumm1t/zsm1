<template>
  <div
    class="
      relative
      z-30
      flex
      items-center
      justify-center
      h-full
      mx-6
      md:mx-heroinfo
    "
  >
    <div class="grid grid-cols-1 2lg:grid-cols-2 items-center gap-8 xl:gap-5">
      <div class="text-center 2lg:text-left">
        <h1
          class="
            font-bold
            text-light-text
            dark:text-dark-text
            text-2xl
            sm:text-3xl
            md:text-4xl
            transform
            hover:-translate-y-2
            transition-transform
            duration-300
          "
        >
          {{ heroDescriptions[currentSlide].title }}
        </h1>

        <p
          class="
            hidden
            sm:block
            mt-5
            leading-relaxed
            text-light-text
            dark:text-dark-text
            opacity-80
            row-start-1
            2lg:row-start-2
          "
        >
          {{ heroDescriptions[currentSlide].description }}
        </p>
      </div>

      <div class="row-start-2 2lg:row-start-1 flex items-center justify-center">
        <component
          :is="heroDescriptions[currentSlide].image"
          class="object-cover object-center rounded w-4/5 h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import CareerHero from '~/assets/heroes/career.svg?inline'
import heroDescriptions from '~/assets/heroes/descriptions'
import SchoolHero from '~/assets/heroes/school.svg?inline'
import WhyUsHero from '~/assets/heroes/why-us.svg?inline'
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroInfo',
  components: { CareerHero, SchoolHero, WhyUsHero },
  data: () => ({
    heroDescriptions,
  }),
  computed: {
    currentSlide() {
      return this.$store.getters.getCurrentSlide
    },
  },
})
</script>
