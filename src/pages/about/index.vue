<template>
  <div class="bg-[#e0d1df] min-h-screen">
    <!-- Section Mon Parcours -->
    <div class="w-full px-10 py-20">
      <h2 class="text-center text-xl font-bold mb-10">Mon Parcours</h2>
      <div class="timeline w-full mx-auto">
        <!-- Élément de la timeline -->
        <div class="timeline-item">
          <p class="text-lg font-semibold">2021 - 2022</p>
          <h3 class="lg:text-xl text-lg font-bold">Première - Spécialités Maths, NSI, Physique-Chimie</h3>
          <p class="lg:text-lg"> 
            Durant cette année, j'ai approfondi mes connaissances en mathématiques, en informatique
            (NSI) et en physique-chimie, me préparant à des études plus spécialisées.
          </p>
        </div>
        <div class="timeline-item">
          <p class="text-lg font-semibold">2022 - 2023</p>
          <h3 class="lg:text-xl text-lg font-bold">Terminale - Baccalauréat avec spécialités Maths et NSI</h3>
          <p class="lg:text-lg">
            J'ai obtenu mon baccalauréat avec des compétences renforcées en mathématiques et en
            sciences du numérique et de l'informatique (NSI).
          </p>
        </div>
        <div class="timeline-item">
          <p class="text-lg font-semibold">2023 - 2024</p>
          <h3 class="lg:text-xl text-lg font-bold">Première année en MMI - Montbéliard</h3>
          <p class="lg:text-lg">
            Intégration au DUT MMI (Métiers du Multimédia et de l'Internet) à Montbéliard, où j'ai
            développé des compétences en communication, design, et développement web.
          </p>
        </div>
        <div class="timeline-item">
          <p class="text-lg font-semibold">2024 - Aujourd'hui</p>
          <h3 class="lg:text-xl text-lg font-bold">Deuxième année en MMI</h3>
          <p class="lg:text-lg">
            Actuellement en deuxième année de MMI, je me spécialise en développement web et continue
            à enrichir mes compétences à travers des projets académiques et professionnels.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Aucune modification au script nécessaire
</script>

<style scoped>
/* Timeline styles */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline-item {
  background-color: #f9f4f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
}

h2 {
  color: #3f0425;
}

p {
  color: #4a4a4a;
}
</style>
