const maxSlides = 2

export const state = () => ({
  currentSlide: 0,
})

export const mutations = {
  setSlide(state, slide) {
    state.currentSlide = slide
  },
}

export const getters = {
  getCurrentSlide: (state) => {
    return state.currentSlide
  },
  getPreviousSlide: (state) => {
    return state.currentSlide - 1 > -1 ? state.currentSlide - 1 : maxSlides
  },
  getNextSlide: (state) => {
    return state.currentSlide + 1 > maxSlides ? 0 : state.currentSlide + 1
  },
}
