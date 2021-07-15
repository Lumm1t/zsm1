<template>
  <div class="mx-3 mt-8">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        gap-x-6
        xl:gap-x-10
        gap-y-3
        md:gap-y-6
        justify-items-center
        container
      "
    >
      <news-post
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :link="card.link"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewsGrid',
  data() {
    return {
      cards: [
        {
          title: 'Egzaminy poprawkowe - sierpień 2021',
          description:
            'Dokładny harmonogram egzaminów poprawkowych jest pod tym linkiem. https://zsm1.bydgoszcz.pl/pliki/_tmp/poprawki_2021.pdf',
          link: '#',
        },
        {
          title: 'Harmonogram odbioru świadectw maturalnych',
          description:
            'Odbiór świadectw odbędzie się dnia 05.07.2021r. w obecności wychowawcy, w sali 1. g. 9.00 - 4 bim (wychowawca Michał Florek) g. 9.30 - 4 cm (wychowawca Krzysztof Szot) g. 10.00 - 4 em (wychowawca Roma Gorczyca) g. 10.30 - 4 gm (wychowawca Piotr Nowakowski) g. 11.00 - 4 im (wychowawca Małgorzata Gutkiewicz) g. 11.30 - 4 mat (wychowawca Justyna Kubera) g. 12.00 - 4 ms (wychowawca Andrzej Sroka) po g. 12.30 - absolwenci - odbiór świadectw bezpośrednio z sekretariatu',
          link: '#',
        },
        {
          title:
            'Podania o wypożyczenie podręczników w ramach programu Rodzina 3+',
          description:
            'Podania o wypożyczenie podręczników w ramach programu Rodzina 3+ należy składać w bibliotece szkolnej w dniach od 23 sierpnia - 10 września w godzinach 9.00 - 13.00',
          link: '#',
        },
        {
          title: 'UROCZYSTOŚĆ ZAKOŃCZENIA ROKU SZKOLNEGO 2020/2021',
          description:
            'UROCZYSTOŚĆ ZAKOŃCZENIA ROKU SZKOLNEGO 2020/2021 odbędzie się wg harmonogramu: https://zsm1.bydgoszcz.pl/pliki/_tmp/zakonczenie_roku_szkolnego_2020_2021.pdf Zapraszamy',
          link: '#',
        },
        {
          title: 'Klasy w szkole wraz z nauczycielami od 24_05_2021',
          description:
            'https://zsm01-my.sharepoint.com/:b:/g/personal/pawel_sankowski_zsm01_onmicrosoft_com/EYWLwUSQuOVBotJ8CjbxpkwBJWrr1JzEzDXqw6xeUSNt5Q?e=Td8h5k',
          link: '#',
        },
        {
          title: 'ZBIÓRKA OPATRUNKÓW DLA DZIECI Z AFRYKI',
          description:
            'Szkolny wolontariat wraz z Fundacją Asante zaprasza do przyłączenia się do akcji Ratujmy bose stópki dzieci z Laary w Kenii, która organizowana jest w ramach projektu Opatrunek na ratunek.',
          link: '#',
        },
        {
          title:
            'Link do naboru elektronicznego dla Kandydatów do Zespołu Szkół Mechanicznych nr 1 w Bydgoszczy',
          description:
            'https://bydgoszcz.edu.com.pl/kandydat/app/apply/index.html',
          link: '#',
        },
        {
          title: 'Odbiór dyplomów potwierdzających kwalifikacje w zawodzie',
          description:
            'Zapraszamy absolwentów Zespołu Szkół Mechanicznych nr 1 do odbioru dyplomów potwierdzających kwalifikacje w zawodzie od poniedziałku 31.05.2021 r. Po dyplom proszę zgłosić się na portiernię Szkoły w głównym budynku.',
          link: '#',
        },
      ],
    }
  },
})
</script>
