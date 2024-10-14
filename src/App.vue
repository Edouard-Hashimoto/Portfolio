<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="text-2xl bg-slate-400">Template </h1>
      <nav>
        <ul>
          <RouterLink to="/">Accueil</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
</template>
