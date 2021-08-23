<template>
  <button
    class="
      flex
      items-center
      text-light-text
      dark:text-dark-text
      gap-6
      group
      focus:outline-none
    "
  >
    <div
      class="
        relative
        flex
        justify-center
        items-center
        flex-shrink-0
        w-[45px]
        h-[45px]
        md:w-[70px] md:h-[70px]
      "
    >
      <svg
        class="
          w-[12px]
          h-[12px]
          md:w-[16px] md:h-[19px]
          z-10
          animate-side-to-side
        "
        style="animation-direction: reverse"
        viewBox="0 0 16 19"
      >
        <path
          d="M0 0l15.938 9.107L0 18.214V0zm1.5 15.63l11.414-6.523L1.5 2.585V15.63z"
          class="
            fill-current
            text-light-text
            dark:text-dark-text
            group-hover:text-dark-text
            dark:group-hover:text-light-text
            group-focus:text-dark-text
            dark:group-focus:text-light-text
            transition-colors
            duration-300
          "
          fill-rule="nonzero"
        ></path>
      </svg>

      <div
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          rounded-full
          animate-side-to-side
          before:block
          before:absolute
          before:top-0
          before:w-full
          before:h-full
          before:bg-black
          dark:before:bg-white
          before:rounded-full before:scale-0
          group-hover:before:scale-100
          group-focus:before:scale-100
          before:transition-transform before:duration-700
        "
      >
        <svg class="w-full h-full" viewBox="0 0 92 92">
          <circle
            cx="46"
            cy="46"
            r="45"
            fill="none"
            class="stroke-current text-light-text dark:text-dark-text stroke-2"
          ></circle>
        </svg>
      </div>
    </div>

    <span
      class="
        font-medium
        after:transition-transform
        after:duration-300
        after:block
        after:border-b
        after:border-black
        dark:after:border-white
        after:scale-x-0 after:origin-right
        group-hover:after:scale-x-100 group-hover:after:origin-left
        group-focus:after:scale-x-100 group-focus:after:origin-left
      "
    >
      Zobacz video
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VideoButton',
})
</script>
