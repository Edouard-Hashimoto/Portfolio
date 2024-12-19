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
        <img src="/Logo-noir.webp" class="h-14 lg:h-20" alt="Logo" />
      </RouterLink>

      <!-- Bouton menu pour petits écrans -->
      <button @click="toggleMenu" class="md:hidden">
        <svg
          class="h-8 w-8"
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
      <div class="hidden space-x-12 md:flex">
        <RouterLink to="/about" class="font-Text-principale text-xl text-black">À propos</RouterLink>
        <RouterLink to="/projet" class="font-Text-principale text-xl text-black"
          >Projets</RouterLink
        >
        <a href="mailto:ed1015japon@gmail.com" class="font-Text-principale text-xl text-black"
          >Contact</a
        >
      </div>
    </nav>

    <!-- Menu déroulant pour petits écrans -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white md:hidden"
    >
      <button @click="toggleMenu" class="absolute right-4 top-4">
        <svg
          class="h-8 w-8"
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
      <RouterLink to="/about" class="router-link block p-4 text-xl" @click="toggleMenu"
        >À propos</RouterLink
      >
      <hr class="w-3/4 border-t-2 border-purple-300" />
      <RouterLink to="/projet" class="router-link block p-4 text-xl" @click="toggleMenu"
        >Projets</RouterLink
      >
      <hr class="w-3/4 border-t-2 border-purple-300" />
      <a href="mailto:example@example.com" class="router-link block p-4 text-xl" @click="toggleMenu">
        Contact
      </a>
    </div>
  </header>

  <main :class="{ blurred: isMenuOpen }">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <footer
    class="relative flex flex-wrap justify-center bg-gradient-to-r from-[#503247] to-[#caaec8] p-10"
  >
    <div class="flex w-full max-w-6xl flex-wrap items-center justify-between gap-5">
      <!-- Contact Section -->
      <div class="w-full text-center text-white md:w-auto">
        <h3 class="font-league-gothic mb-3 text-lg font-bold">CONTACT</h3>
        <p class="font-mulish">edouard.hashimoto@edu.univ-fcomte.fr</p>
        <p class="font-mulish">06 42 55 96 67</p>
      </div>

      <!-- Social Section -->
      <div class="w-full text-center text-white md:w-auto">
        <h3 class="font-league-gothic mb-3 text-lg font-bold">SOCIAL</h3>
        <div class="flex justify-center gap-5">
          <a href="https://github.com/Edouard-Hashimoto" target="_blank" aria-label="GitHub">
            <img src="/logo/github.png" alt="GitHub" class="h-8 w-8 hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/edouard-hashimoto-b9073929a/" target="_blank" aria-label="LinkedIn">
            <img src="/logo/linkedin.png" alt="LinkedIn" class="h-8 w-8 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com/edouard._h/" target="_blank" aria-label="Instagram">
            <img src="/logo/insta.svg" alt="Instagram" class="h-8 w-8 hover:opacity-75" />
          </a>
          <a href="https://x.com/YubiDesuwa" target="_blank" aria-label="Twitter">
            <img src="/logo/x.png" alt="Twitter" class="h-8 w-8 hover:opacity-75" />
          </a>
        </div>
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
