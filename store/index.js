export const state = () => ({
  name: 'nuxt'
})

export const mutations = {
  resetName(state, name) {
    state.name = name
  }
}
