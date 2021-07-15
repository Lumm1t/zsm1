<template>
  <div class="flex self-center mb-24">
    <div
      class="
        grid grid-cols-1
        gap-1
        sm:grid-cols-2
        lg:grid-cols-4 lg:gap-12
        xl:gap-24
        z-20
        mx-auto
        h-32
      "
    >
      <div v-for="(button, index) in buttons" :key="index">
        <hero-button :title="button.title" :link="button.link" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroButtons',
  data() {
    return {
      buttons: [
        { title: 'Egzamin maturalny', link: '#' },
        { title: 'Egzamin zawodowy', link: '#' },
        { title: 'Oferty pracy', link: '#' },
        { title: 'Rekrutacja', link: '#' },
      ],
    }
  },
})
</script>
