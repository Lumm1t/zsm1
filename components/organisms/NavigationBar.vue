<template>
  <nav
    class="
      navbar
      translate-y-0
      w-full
      mx-auto
      fixed
      px-10
      z-50
      transition-all
      duration-500
      ease-out
    "
    :class="{
      'transform -translate-y-full': !showNavbar,
      'bg-light-layer dark:bg-dark-layer shadow-md xl:pt-2': showBackground,
      'xl:pt-8': !showBackground,
    }"
  >
    <div class="container h-20 flex items-center justify-between min-w-full">
      <!-- Drawer -->
      <div class="xl:hidden">
        <div class="flex items-center">
          <button
            class="text-light-text dark:text-dark-text"
            aria-label="Open Menu"
            @click="drawer"
            @keyup.enter="drawer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
            @keydown.esc="isOpen = false"
          >
            <div
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
              @click="isOpen = false"
              @keyup.enter="isOpen = false"
            ></div>
          </div>
        </transition>

        <aside
          class="
            transform
            top-0
            left-0
            w-64
            text-light-text
            dark:text-dark-text
            bg-light-layer
            dark:bg-dark-layer
            fixed
            h-full
            overflow-auto
            ease-in-out
            transition-all
            duration-300
            z-30
          "
          :class="
            isOpen ? 'translate-x-0 visible' : '-translate-x-full invisible'
          "
        >
          <div v-for="(item, index) in menuItems" :key="index">
            <a
              v-if="item.link"
              class="inline-block px-6 py-3 hover:text-primary"
              :href="item.link"
              tabindex="0"
            >
              {{ item.title }}
            </a>

            <div
              v-else
              class="px-6 py-3 hover:text-primary"
              tabindex="0"
              @click="dropdownHandler($event)"
              @keyup.enter="dropdownHandler($event)"
            >
              <span>{{ item.title }}</span>
              <span class="absolute ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>

              <ul class="hidden top-0">
                <li
                  v-for="(element, i) in item.links"
                  :key="i"
                  tabindex="0"
                  class="
                    cursor-pointer
                    text-light-text
                    dark:text-dark-text
                    tracking-normal
                    py-3
                    hover:bg-primary hover:text-white
                    px-3
                    font-normal
                  "
                >
                  <a :href="element.link">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <!-- Logo -->
      <div class="flex items-center">
        <ZsmLogo />
      </div>

      <!-- Menu -->
      <div
        class="
          hidden
          xl:flex
          items-center
          justify-center
          sm:items-stretch sm:justify-start
          font-semibold
        "
      >
        <div v-for="(item, index) in menuItems" :key="index">
          <a
            v-if="item.link"
            class="
              px-7
              2xl:px-12
              block
              leading-5
              text-light-text
              dark:text-dark-text
              hover:text-primary
              focus:text-primary focus:outline-none
              transition-colors
              duration-200
              ease-in-out
            "
            :href="item.link"
            tabindex="0"
          >
            {{ item.title }}
          </a>

          <div
            v-else
            class="
              px-7
              2xl:px-12
              items-center
              flex
              leading-5
              text-light-text
              dark:text-dark-text
              hover:text-primary
              focus:text-primary focus:outline-none
              transition-colors
              duration-200
              ease-in-out
              relative
              cursor-pointer
            "
            tabindex="0"
            @click="dropdownHandler($event)"
            @keyup.enter="dropdownHandler($event)"
          >
            <ul
              class="
                bg-light-layer
                dark:bg-dark-layer
                shadow
                rounded
                py-1
                w-56
                left-0
                mt-8
                -ml-4
                absolute
                hidden
                top-0
              "
            >
              <li
                v-for="(element, i) in item.links"
                :key="i"
                class="
                  cursor-pointer
                  text-light-text
                  dark:text-dark-text
                  leading-3
                  tracking-normal
                  py-3
                  hover:bg-primary hover:text-white
                  focus:bg-primary focus:text-white
                  px-3
                  font-normal
                  focus:outline-none
                "
                tabindex="0"
              >
                <a :href="element.link" class="focus:outline-none">
                  {{ element.title }}
                </a>
              </li>
            </ul>

            {{ item.title }}

            <span class="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <!-- Dark mode button -->
      <div class="flex items-center">
        <DarkMode />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavigationBar',
  data() {
    return {
      isOpen: false as boolean,
      showNavbar: true,
      showBackground: false,
      lastScrollPosition: 0,
      menuItems: [
        { title: 'Aktualności', link: '#' },
        {
          title: 'Szkoła',
          links: [
            {
              title: 'Organizacja roku szkolnego',
              link: '#',
            },
            {
              title: 'Dyrekcja szkoły',
              link: '#',
            },
            {
              title: 'Pedagog szkolny',
              link: '#',
            },
            {
              title: 'Rada Rodziców',
              link: '#',
            },
            {
              title: 'Dokumenty szkoły',
              link: '#',
            },
            {
              title: 'Informacje dla emerytów',
              link: '#',
            },
            {
              title: 'Ewaluacja zewnętrzna',
              link: '#',
            },
            {
              title: 'Dyżury nauczycieli',
              link: '#',
            },
          ],
        },
        {
          title: 'Uczeń',
          links: [
            {
              title: 'Biblioteka',
              link: '#',
            },
            {
              title: 'Plan praktyk',
              link: '#',
            },
            {
              title: 'Dokumenty do pobrania',
              link: '#',
            },
            {
              title: 'Oferty pracy',
              link: '#',
            },
            {
              title: 'Podręczniki szkolne',
              link: '#',
            },
            {
              title: 'Publikacje nauczycieli',
              link: '#',
            },
            {
              title: 'PZO',
              link: '#',
            },
            {
              title: 'Osiągnięcia uczniów',
              link: '#',
            },
            {
              title: 'Koła zainteresowań',
              link: '#',
            },
            {
              title: 'Kalendarz imprez',
              link: '#',
            },
            {
              title: 'Serwis komputerowy',
              link: '#',
            },
          ],
        },
        {
          title: 'Egzaminy',
          links: [
            {
              title: 'Egzamin maturalny CKE',
              link: '#',
            },
            {
              title: 'Egzamin zawodowy CKE',
              link: '#',
            },
          ],
        },
        { title: 'Plan lekcji', link: '#' },
        { title: 'Zastępstwa', link: '#' },
        { title: 'E-dziennik', link: '#' },
        { title: 'Kontakt', link: '#' },
      ] as object[],
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen === true)
            document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', (this as any).onScroll)
  },
  mounted() {
    window.addEventListener('scroll', (this as any).onScroll)

    document.addEventListener('keydown', (e) => {
      // eslint-disable-next-line unicorn/prefer-keyboard-event-key
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    dropdownHandler(event: any) {
      const single = event.currentTarget.querySelectorAll('ul')[0]
      single.classList.toggle('hidden')
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition <= 1) {
        this.showNavbar = true
        this.showBackground = false
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 1) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition

      this.showBackground = true
    },
  },
})
</script>
