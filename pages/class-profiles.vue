<template>
  <div>
    <main-hero />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeCreate() {
    this.$store.commit('setSlide', 2)
  },
})
</script>
