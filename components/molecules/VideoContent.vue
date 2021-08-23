<template>
  <div
    class="
      text-center
      flex flex-col
      items-center
      justify-center
      max-w-[70%]
      gap-16
      z-10
    "
  >
    <VideoParagraph />

    <VideoButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VideoContent',
})
</script>
