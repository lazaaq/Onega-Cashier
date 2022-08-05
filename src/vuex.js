import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: null,
      products: [],
      customers: [],
    }
  },
  getters: {
    user: (state) => {
      return state.user
    },
    products: (state) => {
      return state.products
    },
    customers: (state) => {
      return state.customers
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user)
    },
    products(context, products) {
      context.commit('products', products)
    },
    customers(context, customers) {
      context.commit('customers', customers)
    }
  },
  mutations: {
    user(state, user) {
      state.user = user
    },
    products(state, products) {
      state.products = products
    },
    customers(state, customers) {
      state.customers = customers
    },
  }
})

export default store