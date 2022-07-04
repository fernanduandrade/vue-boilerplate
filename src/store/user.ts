import { createStore, createLogger } from "vuex";

export const store = createStore({
  plugins: [
    createLogger(),
  ],
  state() {
    return {
      username: ""
    }
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    async setUser ({ commit }, params): Promise<void> {
      commit('setUsername', params)
    },
    async clearName({ commit }): Promise<void> {
      commit('setUsername', '')
    }
  },
  getters: {
    username:(state) => state.username
  }
})