<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'
const listProjet = await pb.collection('Projets').getFullList()
</script>

<template>
  <div class="w-full bg-[#e0d1df] px-5 pt-44 pb-20">
    <h2 class="mb-10 text-center font-Text-principale sm:text-2xl text-zinc-900 text-xl">
      Mes Projets
    </h2>
    <div
      class="flex flex-wrap justify-center gap-8"
    >
      <div
        v-for="unProjet in listProjet"
        :key="unProjet.id"
        class="lg:w-[550px] lg:h-[300px] w-72 h-44 relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
      >
      <RouterLink :to="{ name: '/projet/[id]', params: { id: unProjet.id } }">
        <!-- Conteneur de l'image -->
        <div class="absolute inset-0">
          <ImgPb
            v-if="unProjet.Image1"
            :filename="unProjet?.Image1"
            :record="unProjet"
            class="h-full w-full object-cover"
          />
        </div>
        <!-- Conteneur du texte -->
        <div
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"
        >
          <h3 class="font-Text-principale text-lg text-white">{{ unProjet.nom_projet }}</h3>
        </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

