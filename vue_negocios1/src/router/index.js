import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/main.vue'
import shopview from '../components/shopview.vue'
import details from '../components/details.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: main
    },
    {
      path: '/shop',
      name: 'Todos los Productos',
      component: shopview
    },
    {
    path: '/details',
    name: 'Detalles',
    component: details
    }
  ]
})

export default router