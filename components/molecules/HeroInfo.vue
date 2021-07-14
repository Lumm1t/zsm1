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
    <div
      class="grid grid-cols-1 2lg:grid-cols-2 items-center gap-8 xl:gap-0 mb-6"
    >
      <div class="text-center 2lg:text-left">
        <h1
          class="
            title-font
            font-medium
            text-primary text-2xl
            sm:text-3xl
            md:text-4xl
            transform
            hover:-translate-y-2
            transition-transform
            duration-300
          "
        >
          {{ info[currentSlide].title }}
        </h1>

        <p
          class="
            hidden
            sm:block
            mt-5
            leading-relaxed
            text-light-text
            dark:text-dark-text
            row-start-1
            2lg:row-start-2
          "
        >
          {{ info[currentSlide].description }}
        </p>
      </div>

      <div class="row-start-2 2lg:row-start-1 flex items-center justify-center">
        <component
          :is="info[currentSlide].image"
          class="object-cover object-center rounded w-3/5 h-auto"
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
      info: [
        {
          title: 'Zespół Szkół Mechanicznych nr 1 w Bydgoszczy',
          description:
            'Szkoła na stale wrosła w wizerunek miasta. Przez te wszystkie lata wspierana doświadczoną kadrą nauczycieli, wykształciła szereg znanych osobistości',
          image: 'SchoolHero',
        },
        {
          title: 'Dlaczego my?',
          description:
            'Uczniowie szkoły zdobywają wiele nagród na szczeblu wojewódzkim i ogólnopolskim. Absolwenci bez trudu, pokonują następny etap edukacyjny, kontynuując naukę na studiach wyższych',
          image: 'WhyUsHero',
        },
        {
          title: 'Kariera',
          description:
            'W zakresie kształcenia zawodowego realizujemy nauczanie w atrakcyjnych zawodach, poszukiwanych na regionalnym rynku pracy',
          image: 'CareerHero',
        },
      ],
    }
  },
  computed: {
    currentSlide() {
      return this.$store.getters.getCurrentSlide
    },
  },
})
</script>
