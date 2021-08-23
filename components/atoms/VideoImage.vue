<template>
  <div
    class="
      absolute
      top-0
      left-0
      w-1/2
      sm:w-1/4
      h-full
      bg-light-bg
      dark:bg-dark-layer
      transition-transform
      duration-700
    "
    :class="shouldPlayVideo ? 'translate-x-0' : '-translate-x-96'"
  >
    <div
      class="transition-all delay-700 w-full h-full"
      :class="shouldPlayVideo ? 'visible opacity-20' : 'invisible opacity-0'"
    >
      <video
        ref="videoRef"
        :muted="true"
        :loop="true"
        class="object-cover w-full h-full"
      >
        <source
          src="https://zsm1.bydgoszcz.pl/strony/rekrutacja/_nuxt/videos/video2.f92ce53.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VideoImage',
  data: () => ({
    videoRef: undefined as HTMLVideoElement | undefined,
    shouldPlayVideo: false,
  }),
  created() {
    this.$nuxt.$on('play-video', this.playVideo)
    this.$nuxt.$on('pause-video', this.pauseVideo)
  },
  mounted() {
    // @ts-expect-error
    this.videoRef = this.$refs.videoRef
  },
  methods: {
    playVideo() {
      this.shouldPlayVideo = true

      this.videoRef?.load()
      this.videoRef?.play()
    },
    pauseVideo() {
      this.shouldPlayVideo = false

      this.videoRef?.pause()
    },
  },
})
</script>
