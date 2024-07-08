<script setup>
import theHeader from '../src/components/theHeader.vue'
import theFooter from '../src/components/theFooter.vue'
</script>

<template>
<header>
  <theHeader />
</header>
<main>
    <router-view />
</main>
<footer>
  <theFooter />
</footer>
</template>

<style scoped>
main {
  padding-top: 220px; /* Ajusta este valor según la altura de tu encabezado */
}

  
</style>
