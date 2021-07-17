<template>
  <footer
    class="
      relative
      px-3
      py-8
      bg-light-footer
      dark:bg-dark-footer
      text-2 text-light-text
      dark:text-dark-text
    "
  >
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row">
        <nav
          class="
            flex-1 flex flex-col
            items-center
            justify-center
            md:items-end md:border-r
            dark:border-gray-100
            border-gray-400
            md:pr-5
          "
        >
          <a
            v-for="(link, index) in links"
            :key="index"
            aria-current="page"
            :href="link.link"
            class="
              hover:text-primary
              focus:text-primary
              dark:hover:text-primary dark:focus:text-primary
              focus:outline-none
              transition-colors
              duration-200
              ease-in-out
            "
            tabindex="0"
          >
            {{ link.title }}
          </a>
        </nav>

        <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>

        <div
          class="
            mt-4
            md:mt-0
            flex-1 flex
            items-center
            justify-center
            md:border-r
            dark:border-gray-100
            border-gray-400
          "
        >
          <zsm-logo />
        </div>

        <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>

        <div
          class="
            md:mt-0
            flex-1 flex flex-col
            items-center
            justify-center
            md:items-start md:pl-5
            text-center
            md:text-left
          "
        >
          <span class="mt-7 md:mt-1">
            Wdrożone przez
            <a
              class="
                hover:text-primary
                focus:text-primary
                dark:hover:text-primary dark:focus:text-primary
                focus:outline-none
                underline
                transition-colors
                duration-200
                ease-in-out
              "
              href="https://github.com/Lumm1t"
              target="_blank"
              tabindex="0"
            >
              Aleksander Szołowicz
            </a>
          </span>

          <span>
            Wszelkie prawa zastrzeżone &copy;
            {{ new Date().getFullYear() }}
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      links: [
        {
          title: 'BIP',
          link: '#',
        },
        {
          title: 'Polityka prywatności',
          link: '#',
        },
        {
          title: 'Deklaracja dostępności',
          link: '#',
        },
      ],
    }
  },
})
</script>
