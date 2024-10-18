<script setup lang="ts">
</script>

<template>
  <div class="bg-animated flex h-screen flex-col items-center justify-center transition-div">
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
  <div class="bg-black w-full">
    <p class="lg:w-1/2 font-paragraph text-sm md:text-base lg:text-lg text-white pt-20 lg:pt-60 pb-20 lg:pb-60 ml-20">
      Edouard Hashimoto, étudiant en deuxième année de MMi (Métiers du Multimédia et de l'Internet),
      avec une spécialisation en développement web. Passionné par la création et l'optimisation de
      sites et d'applications web, j'explore constamment les nouvelles technologies du web.
    </p>
  </div>
  <div class=" bg-black relative">
    <div class="absolute inset-0 grid-background"></div>
    <p class="font-Text-principale text-2xl text-white relative ml-20">Mes projets <br><br><br></p>
  </div>
</template>

<style scoped>
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
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: lightEffect 3s linear infinite;
}

.bg-animated {
  background: linear-gradient(270deg, #000, #333, #666, #999, #ccc, #fff);
  background-size: 1200% 1200%;
  animation: backgroundAnimation 15s ease infinite;
}

.grid-background::before,
.grid-background::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 80px 80px; /* Adjust the size of the grid */
}
</style>