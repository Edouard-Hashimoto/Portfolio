<template>
  <div class="bg-[#e0d1df]">
    <!-- Section d'introduction -->
    <div
      class="transition-div mb-36 flex flex-col-reverse items-center justify-center gap-5 px-5 pt-56 md:flex-row md:items-start md:px-10"
    >
      <!-- Texte -->
      <div class="flex flex-col items-start md:items-start">
        <h1
          class="animate-light-effect font-Text-principale text-xl text-zinc-900 sm:text-xl lg:mb-[-50px] lg:text-2xl"
        >
          Edouard Hashimoto
        </h1>
        <h1
          class="animate-light-effect font-Text-principale text-xl text-zinc-900 sm:text-xl lg:text-2xl"
        >
          DEVELOPPEUR WEB
        </h1>
      </div>
      <!-- Image -->
    </div>
    <!-- Section à propos -->
    <div class="flex w-full flex-col items-center px-5 pt-52 md:px-10 lg:flex-row lg:items-start">
      <img
        src="/IMG/photo.jpg"
        class="mb-5 w-1/2 rounded-full md:w-1/3 lg:mb-0 lg:mr-10 lg:w-1/4"
        alt="Photo de profil"
      />
      <p
        class="lg:pb-30 font-paragraph text-sm text-black sm:text-base md:text-lg lg:w-1/2 lg:pt-36 lg:text-left"
      >
        Edouard Hashimoto, étudiant en deuxième année de MMi (Métiers du Multimédia et de
        l'Internet), avec une spécialisation en développement web. Passionné par la création et
        l'optimisation de sites et d'applications web, j'explore constamment les nouvelles
        technologies du web.
      </p>
    </div>
    <div class="absolute my-14 left-1/2 w-1/2 h-2 bg-black transform -translate-x-1/2"></div>
    
    <!-- Section carousel -->
    <div class="w-full px-5 md:px-10">
      
      <p class="left-0mb-5 mt-52 font-Text-principale text-lg lg:text-2xl">Mes Projets</p>
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
      <div class="mt-5 pb-8 text-center">
        <RouterLink to="/projet">
          <button
            class="animate-light-effect transform rounded bg-gradient-to-r from-[#503247] to-[#caaec8] px-8 py-4 font-Text-principale text-base text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl lg:text-xl"
          >
            Voir les projets
          </button>
        </RouterLink>
      </div>
    </div>

    <!-- Footer -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const images = [
  '/IMG/Citylight_Mockup_3.webp',
  '/IMG/Free_Key_Chain_Mockup_1 1.webp',
  '/IMG/iPhone_Mockup_2.webp',
  '/IMG/mockup 1.webp',
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
  background: linear-gradient(to right, #3f0425, #a10654, #3f0425);
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
