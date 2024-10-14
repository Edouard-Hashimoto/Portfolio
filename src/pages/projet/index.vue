<script setup lang="ts">

import { pb } from '@/backend';
const listeProjet = await pb.collection('Projets').getFullList();
console.log(listeProjet);

</script>

<template>
    <ul>
        <li v-for="unProjet in listeProjet" :key="unProjet.id"> {{  unProjet.nom_projet }}</li>
    </ul>
</template>