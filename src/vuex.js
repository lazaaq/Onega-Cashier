import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null
}

const store = new Vuex.Store({
  state,
  getters: {},
  actions: {},
  mutations: {}
})

export default store