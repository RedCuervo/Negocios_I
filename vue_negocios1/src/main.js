import './assets/main.css'
import '../lib/easing/easing.min.js'
import '../lib/owlcarousel/owl.carousel.min.js'
import '../mail/contact'
import '../mail/jqBootstrapValidation.min.js'


import '../js/main'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.mount('#app')