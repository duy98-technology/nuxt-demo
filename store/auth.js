export const state = () => ({
  accessToken: []
})

export const mutations = {
  LOGIN (state, data) {
    state.accessToken = data.accessToken
  }
}

export const actions = {
  async login ({ commit }, payload) {
    const res = await this.$repositories.auth.login(payload)
    const { status, data } = res
    if (status === 200 && data.success && data.code) {
      commit('LOGIN', data)
    } else {
      // Handle error here
    }
  }
}
