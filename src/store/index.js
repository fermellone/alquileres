import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navTitle: "Inicio",
  },
  mutations: {
    changeNavTitle(state, newTitle) {
      state.navTitle = newTitle;
    },
  },
  actions: {},
  modules: {},
});
