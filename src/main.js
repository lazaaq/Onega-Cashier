import { createApp } from 'vue'
// import Vue from 'vue' // You can skip this line
import App from './App.vue'
import router from './router'
// import VueAxios from './plugins/axios'

// Vue.use(VueAxios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

const app = createApp(App)

app.config.globalProperties.$host = 'http://localhost:8000/api';
app.config.globalProperties.$appHost = 'http://localhost:8080/#';

app.use(router).mount('#app')