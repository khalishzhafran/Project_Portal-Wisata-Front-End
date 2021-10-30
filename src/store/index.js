import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    login: false
  },
  mutations: {
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
