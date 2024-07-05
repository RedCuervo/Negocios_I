<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import theHeader from '../src/components/theHeader.vue'
import theFooter from '../src/components/theFooter.vue'
</script>

<template>
<header>
  <theHeader />
</header>
<main>
  <RouterView />
</main>
<footer>
  <theFooter />
</footer>
</template>

<style scoped>
main {
  padding-top: 150px; /* Ajusta este valor según la altura de tu encabezado */
}
</style>
