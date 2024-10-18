<script setup lang="ts">
import LoginOut from './components/LoginOut.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header></header>
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
</template>
