import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/main.vue'
import shopview from '../components/shopview.vue'
import details from '../components/details.vue'
import FAQ from '../components/FAQ.vue'
import privacy from '../components/privacy.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import planes from '../components/planes.vue'
import cart from '../components/cart.vue'
import perfilusuario from '../components/PerfilUsuario.vue'
import perfilnutriologo from '../components/PerfilNutriologo.vue'
import calendario from '../components/calendario.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: main
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: perfilusuario
    },
    {
      path: '/calendario',
      name: 'Calendario',
      component: calendario
    },
    {
      path: '/nutriologo',
      name: 'Nutriologo',
      component: perfilnutriologo
    },

    {
      path: '/cart',
      name: 'Cart',
      component: cart
    },
    {
      path: '/planes',
      name: 'Planes',
      component: planes
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
