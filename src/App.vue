<script setup lang="ts">
import LoginOut from './components/LoginOut.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed right-0 top-0 w-full bg-transparent p-4">
    <nav class="flex items-center justify-between">
      <RouterLink to="/" class="mr-auto">
        <img src="/public/IMG/logoH.png" class="h-40" alt="Logo" />
      </RouterLink>
      <div class="flex space-x-12">
        <RouterLink to="/" class="font-Text-principale text-xl text-black">Accueil</RouterLink>
        <RouterLink to="/projets" class="font-Text-principale text-xl text-black"
          >Projets</RouterLink
        >
        <RouterLink to="/contact" class="font-Text-principale text-xl text-black"
          >Contact</RouterLink
        >
      </div>
    </nav>
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
</template>
