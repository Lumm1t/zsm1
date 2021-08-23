<template>
  <div>
    <main-hero />

    <div
      class="
        relative
        bg-white
        dark:bg-black
        flex
        justify-center
        items-center
        h-screen
        w-full
      "
    >
      <VideoImage />

      <VideoContent />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeCreate() {
    this.$store.commit('setSlide', 1)
  },
})
</script>
