import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Page/index.vue'
import Basket from '@/Page/basket.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})

export default router
