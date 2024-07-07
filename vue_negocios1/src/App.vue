<script setup>
import theHeader from '../src/components/theHeader.vue'
import theFooter from '../src/components/theFooter.vue'
import product from '../src/components/product.vue'
</script>

<template>
<header>
  <theHeader />
</header>
<main>
    <router-view />
    <product />
</main>
<footer>
  <theFooter />
</footer>
</template>

<style scoped>
main {
  padding-top: 300px; /* Ajusta este valor según la altura de tu encabezado */
}
</style>
