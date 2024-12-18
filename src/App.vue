<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Bloquer/débloquer le scroll en fonction de l'état du menu
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
</script>

<template>
  <header class="absolute right-0 top-0 w-full bg-transparent p-4">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="mr-auto">
        <img src="/IMG/logoH.png" class="lg:h-40 h-20" alt="Logo" />
      </RouterLink>

      <!-- Bouton menu pour petits écrans -->
      <button @click="toggleMenu" class="md:hidden">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Menu principal pour écrans larges -->
      <div class="hidden md:flex space-x-12">
        <RouterLink to="/" class="font-Text-principale text-xl text-black">Accueil</RouterLink>
        <RouterLink to="/projet" class="font-Text-principale text-xl text-black">Projets</RouterLink>
        <RouterLink to="/contact" class="font-Text-principale text-xl text-black">Contact</RouterLink>
      </div>
    </nav>

    <!-- Menu déroulant pour petits écrans -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black text-white flex flex-col items-center justify-center md:hidden z-50"
    >
      <button @click="toggleMenu" class="absolute top-4 right-4">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <RouterLink to="/" class="block p-4 text-xl router-link" @click="toggleMenu">Accueil</RouterLink>
      <hr class="w-3/4 border-t-2 border-purple-300" />
      <RouterLink to="/projet" class="block p-4 text-xl router-link" @click="toggleMenu">Projets</RouterLink>
      <hr class="w-3/4 border-t-2 border-purple-300" />
      <RouterLink to="/contact" class="block p-4 text-xl router-link" @click="toggleMenu">Contact</RouterLink>
    </div>
  </header>
  

  <main :class="{ 'blurred': isMenuOpen }">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <footer
      class="relative flex flex-wrap justify-center bg-gradient-to-r from-[#503247] to-[#caaec8] p-10"
    >
      <div class="flex w-full max-w-6xl flex-wrap items-start justify-between gap-5">
        <div class="text-center text-white">
          <h3 class="font-league-gothic mb-3 text-lg font-bold">CONTACT</h3>
          <p class="font-mulish">edouard.hashimoto@edu.univ-fcomte.fr</p>
          <p class="font-mulish">06 42 55 96 67</p>
        </div>
      </div>
    </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Teko:wght@300..700&display=swap');

/* Empêche le défilement de la page */
.no-scroll {
  overflow: hidden;
  height: 100vh;
}

/* Applique un effet de flou ou masque le contenu derrière le menu */
.blurred {
  filter: blur(5px);
  pointer-events: none;
  user-select: none;
}

.router-link {
  font-family: 'Teko', sans-serif;
  transition: color 0.3s;
}

.router-link:hover {
  color: #ffcc00;
}
</style>
