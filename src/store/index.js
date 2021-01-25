import Vue from "vue";
import Vuex from "vuex";
import mock from "../dictionaries/mockData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navTitle: "Inicio",
    announces: [],
    savedAnnounces: [],
    user: mock.user,
  },

  mutations: {
    changeNavTitle: (state, newTitle) => {
      state.navTitle = newTitle;
    },

    setAnnounces: (state, announces) => {
      state.announces = announces
    }
  },

  actions: {
    getAnnounces: ({commit}) => {
      return new Promise((resolve, reject) => {
        if (true) {
          setTimeout(() => {
            commit('setAnnounces', mock.announces)
            resolve()
          }, 1000);
        } else {
          reject('Error random')
        }
      })
    }
  }
});
