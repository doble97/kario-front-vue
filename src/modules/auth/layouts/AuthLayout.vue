<template>
  <header>
    <nav class="bg-red-500 flex justify-center">
      <ul class="menu menu-horizontal bg-base-200">
        <li><RouterLink :to="{ name: 'login' }">Login</RouterLink></li>
        <li><RouterLink to="/register">Register</RouterLink></li>
        <!-- <li><RouterLink :to="'/register'">Register</RouterLink></li> -->
      </ul>
    </nav>
  </header>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
