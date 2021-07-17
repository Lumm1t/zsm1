<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="
      stroke-current
      text-light-text
      dark:text-dark-text
      hover:text-primary
      focus:text-primary
      dark:hover:text-primary dark:focus:text-primary
      cursor-pointer
      focus:outline-none
      transition-colors
      duration-200
      ease-in-out
      w-8
      h-8
    "
    viewBox="0 0 24 24"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    tabindex="0"
    @click="changeTheme"
    @keyup.enter="changeTheme"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="12" cy="12" r="9"></circle>
    <line x1="12" y1="3" x2="12" y2="21"></line>
    <line x1="12" y1="9" x2="16.65" y2="4.35"></line>
    <line x1="12" y1="14.3" x2="19.37" y2="6.93"></line>
    <line x1="12" y1="19.6" x2="20.85" y2="10.75"></line>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DarkMode',
  methods: {
    changeTheme() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
  },
})
</script>
