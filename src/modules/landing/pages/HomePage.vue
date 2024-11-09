<template>
  <div>Home page</div>
  <button @click="pruebas">click me</button>
</template>

<script setup lang="ts">
import { ServiceApi } from '@/services/ServiceApi'

const pruebas = () => {
  const api = new ServiceApi('https://pokeapi.co/api/v2')
  api
    .get('/pokemon/ditto')
    .then(data => console.log('RESULTADO', data))
    .catch(error => console.log('ERROR', error))
}
</script>

<style scoped></style>
