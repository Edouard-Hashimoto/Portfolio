<template>
  <div class="bg-[#e0d1df]">
    <!-- Section d'introduction -->
    <div class="transition-div flex min-h-screen flex-col items-start justify-center px-5 md:px-10">
      <h1
        class="animate-light-effect mb-5 font-Text-principale text-lg text-zinc-900 sm:text-xl lg:text-2xl"
      >
        Edouard Hashimoto
      </h1>
      <h1
        class="animate-light-effect font-Text-principale text-lg text-zinc-900 sm:text-xl lg:text-2xl"
      >
        DEVELOPPEUR WEB
      </h1>
    </div>
    <!-- Section à propos -->
    <div class="w-full px-5 md:px-10">
      <p
        class="font-paragraph text-sm text-black sm:text-base md:text-lg lg:w-3/4 lg:pb-20 lg:pt-20 lg:text-lg"
      >
        Edouard Hashimoto, étudiant en deuxième année de MMi (Métiers du Multimédia et de
        l'Internet), avec une spécialisation en développement web. Passionné par la création et
        l'optimisation de sites et d'applications web, j'explore constamment les nouvelles
        technologies du web.
      </p>
    </div>
    <!-- Section carousel -->
    <div class="w-full px-5 text-center md:px-10">
      <h2 class="mb-5 font-Text-principale text-2xl text-zinc-800 sm:text-3xl lg:text-4xl">
        Mes Projets
      </h2>
      <div class="carousel">
        <div
          class="carousel-track"
          :style="{
            transform: `translateX(-${scrollOffset}px)`,
            transition: 'transform 0.05s linear'
          }"
        >
          <div
            class="carousel-item h-[300px] w-[100px] p-0 md:p-10 lg:h-[700px] lg:w-[500px]"
            v-for="(image, index) in infiniteImages"
            :key="index"
          >
            <img :src="image" :alt="`Image ${index + 1}`" class="carousel-image" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="relative flex flex-wrap justify-center bg-gray-100 p-5 pb-20">
      <div class="flex w-full max-w-6xl flex-wrap items-center justify-around gap-5">
        <div class="text-center">
          <h3 class="font-league-gothic mb-3 text-lg font-bold text-gray-900">PROJETS</h3>
          <ul class="font-mulish list-none space-y-2 text-gray-800">
            <li>Lazydocs</li>
            <li>Expo Toyo Ito</li>
            <li>Logo Judo</li>
            <li>Affiche Ville</li>
          </ul>
        </div>
        <div class="text-center">
          <h3 class="font-league-gothic mb-3 text-lg font-bold text-gray-900">CONTACT</h3>
          <p class="font-mulish text-gray-800">edouard.hashimoto@edu.univ-fcomte.fr</p>
          <p class="font-mulish text-gray-800">06 42 55 96 67</p>
        </div>
        <div class="text-center">
          <h3 class="font-league-gothic mb-3 text-lg font-bold text-gray-900">SOCIAL</h3>
          <ul class="font-mulish list-none space-y-2 text-gray-800">
            <li><a href="#" class="hover:underline">LinkedIn</a></li>
            <li><a href="#" class="hover:underline">Behance</a></li>
            <li><a href="#" class="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const images = [
  '/IMG/Citylight_Mockup_3.webp',
  '/IMG/Free_Key_Chain_Mockup_1 1.webp',
  '/IMG/iPhone_Mockup_2.webp',
  '/IMG/mockup 1.webp',
  '/IMG/iPhone_Mockup_2.webp'
]

const infiniteImages = computed(() => [...images, ...images, ...images])
const scrollOffset = ref(0)
const slideWidth = 520

const startInfiniteScroll = () => {
  setInterval(() => {
    scrollOffset.value += 1
    if (scrollOffset.value >= images.length * slideWidth) {
      scrollOffset.value = 0
    }
  }, 40) // Approx. 60 frames per second
}

onMounted(() => {
  startInfiniteScroll()
})
</script>

<style scoped>
/* Styles d'animation */
@keyframes lightEffect {
  0% {
    background-position: -100%;
  }
  100% {
    background-position: 100%;
  }
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-light-effect {
  background: linear-gradient(to right, #000, #9e0505, #000);
  background-size: 200% auto;
  -webkit-background-clip: text;
  color: transparent;
  animation: lightEffect 3s linear infinite;
}

.grid-background::before,
.grid-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 2px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 2px, transparent 1px);
  background-size: 80px 80px;
}

/* Style général déjà présent */
.carousel {
  width: 100%;
  height: 800px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #503247, #caaec8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 40px;
}

.carousel-track {
  display: flex;
  white-space: nowrap;
}

.carousel-item {
  flex: 0 0 auto;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.carousel-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

/* Media queries pour les écrans plus petits */
@media (max-width: 768px) {
  .carousel {
    height: 600px;
  }

  .carousel-item {
    width: 300px;
    height: 500px;
  }
}

@media (max-width: 480px) {
  .carousel {
    height: 400px;
  }

  .carousel-item {
    width: 200px;
    height: 350px;
    padding: 0 5px;
  }

  .carousel-item img {
    border-radius: 6px;
  }
}
</style>
