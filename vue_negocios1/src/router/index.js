import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/main.vue'
import shopview from '../components/shopview.vue'
import details from '../components/details.vue'
import product from '../components/product.vue'

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
    },
    {
      path: '/product',
      name: 'Producto',
      component: product
    }
  ]
})

export default router