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
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center h-72">
      <div class="text-center lg:text-left">
        <h1 class="title-font font-medium text-primary text-3xl md:text-4xl">
          {{ info[currentSlide].title }}
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
          {{ info[currentSlide].description }}
        </p>
      </div>

      <div
        class="row-start-1 hidden lg:flex"
        style="justify-content: center; align-items: center"
      >
        <component
          :is="info[currentSlide].image"
          class="object-cover object-center rounded"
          width="60%"
          height="auto"
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
            'Szkoła na stale wrosła we współczesny wizerunek miasta Bydgoszczy i regionu kujawsko-pomorskiego.',
          image: 'SchoolHero',
        },
        {
          title: 'Dlaczego my?',
          description:
            'Przez te wszystkie lata szkoła wspierana doświadczoną kadrą nauczycieli i wychowawców, wykształciła szereg znanych osobistości życia politycznego i biznesowego. Absolwenci naszej szkoły bez trudu pokonują następny etap edukacyjny jakim są studia wyższe na wybranej uczelni.',
          image: 'WhyUsHero',
        },
        {
          title: 'Kariera',
          description:
            'W zakresie kształcenia zawodowego realizujemy nauczanie w atrakcyjnych zawodach, poszukiwanych na regionalnym rynku pracy.',
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
