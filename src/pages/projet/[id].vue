<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'
import { useRoute } from 'vue-router/auto'

const route = useRoute()
const unProjet = await pb.collection('Projets').getOne(route.params.id)
</script>

<template>
  <div>
    <ImgPb
      v-if="unProjet.IMGfond"
      :filename="unProjet?.IMGfond"
      :record="unProjet"
      class="pb-[-700px] w-screen object-cover"
    />
    <p class="absolute left-[50px] top-[1200px] w-1/2 font-paragraph text-base text-black">
      {{ unProjet?.para1 }}
    </p>
  </div>
  <div>
    <h1 class="font-Text-principale text-2xl">
      {{ unProjet?.Titre1 }}
    </h1>
    <p class="font-paragraph text-base ml-4 w-1/2 my-10">
      {{ unProjet?.Para2 }}
    </p>
    <ImgPb
      v-if="unProjet.Image2"
      :filename="unProjet?.Image2"
      :record="unProjet"
      class="absolute right-0 top-[1900px] w-1/2"
    />
  </div>
</template>
