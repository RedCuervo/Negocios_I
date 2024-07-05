import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/main.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: main
    },
  ]
})

export default router