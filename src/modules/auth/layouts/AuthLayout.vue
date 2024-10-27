<template>
  <div class="h-screen flex flex-col">
    <header>
      <nav class="flex justify-center">
        <ul class="menu menu-horizontal bg-base-200">
          <li><RouterLink :to="{ name: 'login' }">Login</RouterLink></li>
          <li><RouterLink to="/register">Register</RouterLink></li>
          <!-- <li><RouterLink :to="'/register'">Register</RouterLink></li> -->
        </ul>
      </nav>
    </header>
    <main class="flex-1 flex justify-center items-center">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
