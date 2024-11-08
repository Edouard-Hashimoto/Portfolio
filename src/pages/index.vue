<script setup lang="ts">
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
  <div class=" bg-white relative">
    <div class="absolute inset-0 grid-background"></div>
    <p class="font-Text-principale text-2xl text-black relative ml-20">Mes projets <br><br><br></p>
  </div>
  <footer class="flex justify-around items-center bg-gray-100 p-5 relative">
  <div class="text-center">
    <h3 class="font-league-gothic font-bold mb-3">PROJETS</h3>
    <ul class="m-0 p-0 list-none text-gray-800 font-mulish">
      <li class="mb-1">Lazydocs</li>
      <li class="mb-1">Expo Toyo Ito</li>
      <li class="mb-1">Logo Judo</li>
      <li>Affiche Ville</li>
    </ul>
  </div>
  <div class="text-center">
    <h3 class="font-league-gothic font-bold mb-3">CONTACT</h3>
    <p class="m-0 text-gray-800 font-mulish">edouard.hashimoto@edu.univ-fcomte.fr</p>
    <p class="m-0 text-gray-800 font-mulish">06 42 55 96 67</p>
  </div>
  <div class="text-center">
    <h3 class="font-league-gothic font-bold mb-3">SOCIAL</h3>
    <ul class="m-0 p-0 list-none text-gray-800 font-mulish">
      <li class="mb-1">LinkedIn</li>
      <li class="mb-1">Behance</li>
      <li>Instagram</li>
    </ul>
  </div>
  <div class="absolute bottom-0 left-0">
    <img src="/public/IMG/logoHBlanc.webp" alt="Logo" class="max-w-xs h-auto" />
  </div>
</footer>

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
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 2px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 2px, transparent 1px);
  background-size: 80px 80px; /* Adjust the size of the grid */
}
</style>