import { createStore } from "vuex";

export const store = createStore({
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
  getters: {
    username:(state) => state.username
  }
})