<template>
  <div
    class="
      grid grid-cols-2
      sm:grid-cols-4
      xl:grid-cols-8
      gap-4
      justify-items-center
      container
      mx-auto
    "
  >
    <access-card
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :link="card.link"
      :image="card.image"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccessCards',
  data() {
    return {
      cards: [
        {
          title: '',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/img/2021-technikum-braz.jpg',
        },
        {
          title: 'Lokalna Akademia CISCO',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/strony/lac/img/c1.png',
        },
        {
          title: 'Rok 2021 - ROKIEM BYDGOSKIEGO MARCA ‘81',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/img/tmp/marzec81.png',
        },
        {
          title: 'Projekt Akcja - Kwalifikacja 3',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/strony/ak/logo1.png',
        },
        {
          title: 'Projekt Dzisiaj staż, jutro praca',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/strony/ak/logo1.png',
        },
        {
          title: 'Samorząd uczniowski',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/strony/samorzad/logo.png',
        },
        {
          title: 'Szkolny Klub Wolontariuszy Jest Moc!',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/strony/wolontariat/volunteer.png',
        },
        {
          title: 'Zespół Pieśni i Tańca Ziemia Bydgoska',
          link: '#',
          image: 'https://zsm1.bydgoszcz.pl/strony/zpitzb/img/logoZByy.png',
        },
      ],
    }
  },
})
</script>
