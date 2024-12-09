<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Logique du carrousel
const currentIndex = ref(0);
const slides = ref([
  { image: "public/iPhone_Mockup_2.webp" },
  { image: "public/mockup 1.webp"},
  { image: "public/Free_Key_Chain_Mockup_1 1.webp"},
]);

let interval: ReturnType<typeof setInterval>;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

onMounted(() => {
  interval = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="bg-white flex h-screen flex-col items-center justify-center transition-div">
    <h1
      class="animate-light-effect font-Text-principale text-xl md:text-xl lg:text-2xl text-zinc-900"
      style="margin-bottom: -10px"
    >
      Edouard Hashimoto
    </h1>
    <h1
      class="animate-light-effect font-Text-principale text-xl md:text-xl lg:text-2xl text-zinc-900"
      style="margin-top: -10px"
    >
      DEVELOPPEUR WEB
    </h1>
  </div>

  <div class="bg-white w-full">
    <p class="lg:w-1/2 font-paragraph text-sm md:text-base lg:text-lg text-black pt-20 lg:pt-60 pb-20 lg:pb-60 ml-20">
      Edouard Hashimoto, étudiant en deuxième année de MMi (Métiers du Multimédia et de l'Internet),
      avec une spécialisation en développement web. Passionné par la création et l'optimisation de
      sites et d'applications web, j'explore constamment les nouvelles technologies du web.
    </p>
  </div>

  <!-- Section avec le carrousel -->
  <div class="bg-white relative p-20">
    <div class="absolute inset-0 grid-background"></div>
    <p class="font-Text-principale text-2xl text-black relative ml-20">Mes projets</p>
    <div class="carousel-container relative overflow-hidden w-[600px] h-[800px]">
      <div
        class="carousel-wrapper flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-slide flex-shrink-0 w-full h-full"
        >
          <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover mt-[-100px]" />
          <p class="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded">
            {{ slide.title }}
          </p>
        </div>
      </div>

      <!-- Indicateurs -->
      <div class="indicators absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="w-3 h-3 bg-gray-500 rounded-full cursor-pointer"
          :class="{ 'bg-black': index === currentIndex }"
          @click="currentIndex = index"
        ></span>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="relative flex justify-center bg-gray-100 p-5">
    <div class="absolute left-0 top-0 h-full flex items-center pl-5">
      <img src="/public/IMG/logoHBlanc.webp" alt="Logo" class="max-w-sm h-auto opacity-20" />
    </div>
    <div class="flex justify-around w-full max-w-6xl items-center">
      <div class="text-center">
        <h3 class="font-league-gothic font-bold mb-3 text-lg text-gray-900">PROJETS</h3>
        <ul class="list-none text-gray-800 font-mulish space-y-2">
          <li>Lazydocs</li>
          <li>Expo Toyo Ito</li>
          <li>Logo Judo</li>
          <li>Affiche Ville</li>
        </ul>
      </div>
      <div class="text-center">
        <h3 class="font-league-gothic font-bold mb-3 text-lg text-gray-900">CONTACT</h3>
        <p class="text-gray-800 font-mulish">edouard.hashimoto@edu.univ-fcomte.fr</p>
        <p class="text-gray-800 font-mulish">06 42 55 96 67</p>
      </div>
      <div class="text-center">
        <h3 class="font-league-gothic font-bold mb-3 text-lg text-gray-900">SOCIAL</h3>
        <ul class="list-none text-gray-800 font-mulish space-y-2">
          <li><a href="#" class="hover:underline">LinkedIn</a></li>
          <li><a href="#" class="hover:underline">Behance</a></li>
          <li><a href="#" class="hover:underline">Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

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
  background: linear-gradient(to right, #000, #fff, #000);
  background-size: 200% auto;
  -webkit-background-clip: text;
  color: transparent;
  animation: lightEffect 3s linear infinite;
}

.grid-background::before,
.grid-background::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 2px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 2px, transparent 1px);
  background-size: 80px 80px;
}

.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.indicators span {
  transition: background-color 0.3s ease;
}

.indicators span.bg-black {
  background-color: black;
}
</style>
