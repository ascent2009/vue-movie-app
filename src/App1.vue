<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <strong>Current route path:</strong> {{ $route.fullPath }}
  <nav>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/movie/1">Movies</RouterLink>
    <RouterView />
  </nav>
  <!-- <main>
    <RouterView />
  </main> -->
</template>
