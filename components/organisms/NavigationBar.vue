<template>
  <nav
    :class="{
      'transform -translate-y-full': !showNavbar && !hamburgerOpen,
      'bg-light-layer dark:bg-dark-layer shadow-md py-6': showBackground,
      'py-6 xl:py-16': !showBackground,
    }"
    class="
      fixed
      px-6
      xl:px-12
      flex
      items-center
      justify-between
      min-w-full
      z-50
      transition-all
      duration-500
      ease-out
    "
  >
    <!-- Hamburger -->
    <div class="xl:hidden">
      <!-- Hamburger icon -->
      <button
        class="
          text-light-text
          dark:text-dark-text
          hover:text-primary
          focus:text-primary
          dark:hover:text-primary dark:focus:text-primary
          focus:outline-none
          z-10
        "
        aria-label="Otwórz menu"
        @click="hamburgerOpen = !hamburgerOpen"
        @keyup.esc="hamburgerOpen = false"
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

      <!-- Hamburger transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          v-show="hamburgerOpen"
          class="z-10 fixed inset-0 transition-opacity"
          @keydown.esc="hamburgerOpen = false"
        >
          <div
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
            @click="hamburgerOpen = false"
            @keyup.enter="hamburgerOpen = false"
          ></div>
        </div>
      </transition>

      <!-- Hamburger menu -->
      <aside
        class="
          fixed
          top-0
          left-0
          bg-light-layer
          dark:bg-dark-layer
          w-64
          h-full
          transform
          transition-all
          ease-in-out
          duration-300
          overflow-auto
          z-30
        "
        :class="
          hamburgerOpen
            ? 'translate-x-0 visible'
            : '-translate-x-full invisible'
        "
      >
        <ul class="flex flex-col text-light-text dark:text-dark-text px-4">
          <li v-for="(item, index) in menuItems" :key="index">
            <a
              v-if="item.link"
              :href="item.link"
              class="
                block
                px-4
                py-2
                mt-2
                hover:bg-primary
                focus:bg-primary focus:outline-none
                rounded
              "
            >
              {{ item.title }}
            </a>

            <div v-else @click="dropdownOpen" @keydown.esc="dropdownClose">
              <a
                href="#"
                class="
                  block
                  px-4
                  py-2
                  mt-2
                  hover:bg-primary
                  focus:bg-primary focus:outline-none
                  rounded
                "
              >
                <div class="flex items-center justify-between">
                  {{ item.title }}

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
                </div>
              </a>

              <ul
                class="dropdown hidden mx-2 rounded border-b border-l border-r"
              >
                <li v-for="(element, i) in item.links" :key="i">
                  <a
                    :href="element.link"
                    class="
                      p-2
                      pl-4
                      block
                      hover:bg-primary
                      focus:bg-primary focus:outline-none
                    "
                  >
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </aside>
    </div>

    <!-- Logo -->
    <ZsmLogo />

    <!-- Menu -->
    <ul
      class="
        hidden
        xl:flex
        items-center
        justify-center
        font-semibold
        gap-x-14
        2xl:gap-x-24
        text-light-text
        dark:text-dark-text
      "
    >
      <li v-for="(item, index) in menuItems" :key="index">
        <a
          v-if="item.link"
          :href="item.link"
          class="hover:text-primary focus:text-primary focus:outline-none"
        >
          {{ item.title }}
        </a>

        <div v-else @click="dropdownOpen" @keydown.esc="dropdownClose">
          <a
            href="#"
            class="hover:text-primary focus:text-primary focus:outline-none"
          >
            <div class="flex items-center gap-1">
              {{ item.title }}

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
            </div>
          </a>

          <ul
            class="
              dropdown
              absolute
              hidden
              dark:bg-dark-layer
              bg-white bg-opacity-75
            "
          >
            <li v-for="(element, i) in item.links" :key="i">
              <a
                :href="element.link"
                class="
                  block
                  p-2
                  hover:bg-primary
                  focus:bg-primary focus:outline-none
                "
              >
                {{ element.title }}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- Dark mode button -->
    <DarkMode />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  hamburgerOpen: boolean
  showNavbar: boolean
  showBackground: boolean
  lastScrollPosition: number
  // prettier-ignore
  menuItems: { title: string, link?: string, links?: { title: string, link: string }[] }[]
}

export default Vue.extend({
  name: 'NavigationBar',
  data: (): Data => ({
    hamburgerOpen: false,
    showNavbar: true,
    showBackground: false,
    lastScrollPosition: 0,
    menuItems: [
      { title: 'Aktualności', link: '/' },
      {
        title: 'Szkoła',
        links: [
          {
            title: 'Organizacja roku szkolnego',
            link: '/',
          },
          {
            title: 'Dyrekcja szkoły',
            link: '/',
          },
          {
            title: 'Pedagog szkolny',
            link: '/',
          },
          {
            title: 'Rada Rodziców',
            link: '/',
          },
          {
            title: 'Dokumenty szkoły',
            link: '/',
          },
          {
            title: 'Informacje dla emerytów',
            link: '/',
          },
          {
            title: 'Ewaluacja zewnętrzna',
            link: '/',
          },
          {
            title: 'Dyżury nauczycieli',
            link: '/',
          },
        ],
      },
      {
        title: 'Uczeń',
        links: [
          {
            title: 'Biblioteka',
            link: '/',
          },
          {
            title: 'Plan praktyk',
            link: '/',
          },
          {
            title: 'Dokumenty do pobrania',
            link: '/',
          },
          {
            title: 'Oferty pracy',
            link: '/',
          },
          {
            title: 'Podręczniki szkolne',
            link: '/',
          },
          {
            title: 'Publikacje nauczycieli',
            link: '/',
          },
          {
            title: 'PZO',
            link: '/',
          },
          {
            title: 'Osiągnięcia uczniów',
            link: '/',
          },
          {
            title: 'Koła zainteresowań',
            link: '/',
          },
          {
            title: 'Kalendarz imprez',
            link: '/',
          },
          {
            title: 'Serwis komputerowy',
            link: '/',
          },
        ],
      },
      {
        title: 'Egzaminy',
        links: [
          {
            title: 'Egzamin maturalny CKE',
            link: '/',
          },
          {
            title: 'Egzamin zawodowy CKE',
            link: '/',
          },
        ],
      },
      { title: 'Plan lekcji', link: '/' },
      { title: 'Zastępstwa', link: '/' },
      { title: 'E-dziennik', link: '/' },
      { title: 'Kontakt', link: '/' },
    ],
  }),
  watch: {
    hamburgerOpen: {
      immediate: true,
      handler(isOpen: boolean) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    dropdownOpen(event: any) {
      const targetDropdown = event.currentTarget.querySelector('.dropdown')

      this.closeAllDropdowns(targetDropdown)

      targetDropdown.classList.toggle('hidden')
    },
    dropdownClose(event: any) {
      const targetDropdown = event.currentTarget.querySelector('.dropdown')

      targetDropdown.classList.add('hidden')
    },
    closeAllDropdowns(skipDropdown?: any) {
      const allDropdowns = [...document.querySelectorAll('.dropdown')]

      for (const dropdown of allDropdowns) {
        if (dropdown === skipDropdown) continue

        dropdown.classList.add('hidden')
      }
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition <= 1) {
        this.showNavbar = true
        this.showBackground = false

        return
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 1) return

      if (currentScrollPosition > this.lastScrollPosition)
        this.closeAllDropdowns()

      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.showBackground = true
    },
  },
})
</script>
