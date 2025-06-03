import './assets/main.css'
// import router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/routes'

import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
