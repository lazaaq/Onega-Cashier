import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

const app = createApp(App)

app.config.globalProperties.$appHost = 'http://localhost:8080/#';
// app.config.globalProperties.$config = {
//   headers: {
//     Authorization: 'Bearer ' + localStorage.getItem('token')
//   }
// }

app.use(router).mount('#app')