import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PrintView from '../views/PrintView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/print',
    name: 'print',
    component: PrintView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
