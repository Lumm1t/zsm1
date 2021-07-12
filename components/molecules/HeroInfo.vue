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
      sm:mx-heroinfo
    "
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div class="text-center lg:text-left">
        <h1 class="title-font font-medium text-primary text-3xl md:text-4xl">
          Zespół Szkół Mechanicznych nr 1 w Bydgoszczy
        </h1>

        <p
          class="
            mt-2
            leading-relaxed
            text-light-text
            dark:text-dark-text
            row-start-2
          "
        >
          Szkoła na stale wrosła we współczesny wizerunek miasta Bydgoszczy i
          regionu kujawsko-pomorskiego.
        </p>
      </div>

      <div
        class="row-start-1 hidden lg:flex"
        style="justify-content: center; align-items: center"
      >
        <component
          :is="image"
          class="object-cover object-center rounded"
          width="70%"
          height="70%"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import CareerHero from '~/assets/heroes/career.svg?inline'
import SchoolHero from '~/assets/heroes/school.svg?inline'
import WhyUsHero from '~/assets/heroes/why-us.svg?inline'
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroInfo',
  components: { CareerHero, SchoolHero, WhyUsHero },
  data() {
    return {
      image: 'SchoolHero',
    }
  },
})
</script>
