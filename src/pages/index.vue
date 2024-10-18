<template>
  <div class="bg-animated flex h-screen flex-col items-center justify-center">
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
    <p class="lg:w-1/2 font-paragraph text-sm md:text-base lg:text-lg text-white pt-20 lg:pt-60">
      Edouard Hashimoto, étudiant en deuxième année de MMi (Métiers du Multimédia et de l'Internet),
      avec une spécialisation en développement web. Passionné par la création et l'optimisation de
      sites et d'applications web, j'explore constamment les nouvelles technologies du web.
    </p>
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
</style>