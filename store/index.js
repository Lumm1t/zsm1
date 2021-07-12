const maxSlides = 2

export const state = () => ({
  currentSlide: 0,
})

export const mutations = {
  setSlide(state, slide) {
    state.currentSlide = slide
  },
  increment(state) {
    state.currentSlide + 1 > maxSlides
      ? (state.currentSlide = 0)
      : state.currentSlide++
  },
  decrement(state) {
    state.currentSlide - 1 > -1
      ? state.currentSlide--
      : (state.currentSlide = maxSlides)
  },
}

export const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 500)
  },
  decrementAsync({ commit }) {
    setTimeout(() => {
      commit('decrement')
    }, 500)
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
