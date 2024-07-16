import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/main.vue'
import shopview from '../components/shopview.vue'
import details from '../components/details.vue'
import FAQ from '../components/FAQ.vue'
import privacy from '../components/privacy.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import profile from '../components/PerfilUsuario.vue' // Importa el componente de perfil
import Cart from '@/components/cart.vue'
import Contact from '@/components/contact.vue'
import PerfilUsuario from '../components/PerfilUsuario.vue'
import Orders from '@/components/orders.vue'
import Calendario from '@/components/calendario.vue'
import Planes from '@/components/planes.vue'
import Checkout from '@/components/checkout.vue'
import PerfilNutriologo from '@/components/PerfilNutriologo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: main
    },
    {
      path:'/cart',
      name: 'carrito',
      component: Cart
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
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
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/privacy',
      name: 'Privacidad',
      component: privacy
    },
    {
      path: '/AboutUs',
      name: 'Nosotros',
      component: () => import('../components/about.vue')
    },
    {
      path: '/Terms',
      name: 'Terminos y Condiciones',
      component: () => import('../components/terms.vue')
    },
    {
      path: '/profile',
      name: 'Perfil',
      component: profile // Usa el componente de perfil importado
    },
    {
      path:'/contact',
      name: 'contacto',
      component: Contact
    },
    {
      path:'/usuario',
      name: 'perfilusuario',
      component: PerfilUsuario
    },
    {
      path:'/orders',
      name: 'compras',
      component: Orders
    },
    {
      path:'/calendario',
      name: 'calendario',
      component: Calendario
    },
    {
      path:'/planes',
      name: 'planes',
      component: Planes
    },
    {
      path:'/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/perfilnutriologo',
      name: 'nutriologos',
      component: PerfilNutriologo
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
