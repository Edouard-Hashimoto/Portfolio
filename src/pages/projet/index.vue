<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'
const listProjet = await pb.collection('Projets').getFullList()
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Liste :</h2>
    <ul class="space-y-2">
      <li v-for="unProjet in listProjet" :key="unProjet.id" class="p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
          {{ unProjet.nom_projet }}
                    <ImgPb
      v-if="unProjet.nom_projet"
      :filename="unProjet?.Image1"
      :record="unProjet"
      class="rounded-lg mb-4"
    />
      </li>
    </ul>
  </div>
</template>
