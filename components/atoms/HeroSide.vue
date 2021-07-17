<template>
  <div
    class="
      px-2
      sm:px-8
      absolute
      flex
      left-0
      w-full
      justify-between
      z-30
      top-heroside
    "
  >
    <nuxt-link
      :to="heroDescriptions[previousSlide].link"
      class="focus:outline-none"
      tabindex="-1"
    >
      <button
        class="
          flex flex-row
          cursor-pointer
          transform
          hover:-translate-x-2 hover:-translate-y-2
          focus:-translate-x-2 focus:-translate-y-2
          text-light-hero-side
          dark:text-dark-hero-side
          focus:text-light-text
          hover:text-light-text
          dark:hover:text-dark-text dark:focus:text-dark-text
          duration-700
          outline-none
          focus:outline-none
        "
        @click="$store.dispatch('decrementAsync')"
        @keyup.enter="$store.dispatch('decrementAsync')"
      >
        <svg class="transform rotate-180 mr-5" width="10" height="21">
          <path
            d="M2 2l6 8.4-6 8.4"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
            class="stroke-current"
          ></path>
        </svg>

        <div class="text-left hidden xl:block w-48">
          <h2 class="block text-2xl font-bold">
            {{
              heroDescriptions[previousSlide].short ||
              heroDescriptions[previousSlide].title
            }}
          </h2>
          <p class="block text-xs mt-2">
            {{ heroDescriptions[previousSlide].description }}
          </p>
        </div>
      </button>
    </nuxt-link>

    <nuxt-link
      :to="heroDescriptions[nextSlide].link"
      class="focus:outline-none"
      tabindex="-1"
    >
      <button
        class="
          flex flex-row-reverse
          cursor-pointer
          transform
          hover:translate-x-2 hover:-translate-y-2
          focus:translate-x-2 focus:-translate-y-2
          text-light-hero-side
          dark:text-dark-hero-side
          focus:text-light-text
          hover:text-light-text
          dark:hover:text-dark-text dark:focus:text-dark-text
          duration-700
          outline-none
          focus:outline-none
        "
        @click="$store.dispatch('incrementAsync')"
        @keyup.enter="$store.dispatch('incrementAsync')"
      >
        <svg class="ml-5" width="10" height="21">
          <path
            d="M2 2l6 8.4-6 8.4"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
            class="stroke-current"
          ></path>
        </svg>

        <div class="text-right hidden xl:block w-48">
          <h2 class="block text-2xl font-bold">
            {{
              heroDescriptions[nextSlide].short ||
              heroDescriptions[nextSlide].title
            }}
          </h2>
          <p class="block text-xs mt-2">
            {{ heroDescriptions[nextSlide].description }}
          </p>
        </div>
      </button>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import heroDescriptions from '~/assets/heroes/descriptions'
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroSide',
  data: () => ({
    heroDescriptions,
  }),
  computed: {
    previousSlide() {
      return this.$store.getters.getPreviousSlide
    },
    nextSlide() {
      return this.$store.getters.getNextSlide
    },
  },
})
</script>
