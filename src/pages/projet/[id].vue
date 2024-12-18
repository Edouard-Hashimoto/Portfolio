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
      class="w-screen object-cover pb-[-700px]"
    />
    <p
      class="mx-2 my-2 font-paragraph text-sm text-black lg:absolute lg:left-[50px] lg:top-[1200px] lg:w-1/2 lg:text-base"
    >
      {{ unProjet?.para1 }}
    </p>
  </div>
  <div>
    <h1 class="mx-2 font-Text-principale text-[80px] text-purple-700 lg:text-2xl">
      {{ unProjet?.Titre1 }}
    </h1>
    <div class="my-4 flex flex-col items-start gap-4 sm:flex-row lg:my-10">
      <p class="mx-2 font-paragraph text-sm sm:w-1/2 lg:text-base">
        {{ unProjet?.Para2 }}
      </p>
      <ImgPb
        v-if="unProjet.Image2"
        :filename="unProjet?.Image2"
        :record="unProjet"
        class="w-full sm:w-1/3"
      />
    </div>
    <ImgPb
      v-if="unProjet.Image3"
      :filename="unProjet?.Image3"
      :record="unProjet"
      class="w-full sm:w-1/3"
    />
    <h1 class="mx-2 font-Text-principale text-[80px] text-purple-700 lg:text-2xl">
      {{ unProjet?.Titre3 }}
    </h1>
    <p class="mx-2 font-paragraph text-sm sm:w-1/2 lg:text-base">
      {{ unProjet?.Para3 }}
    </p>
    <h1 class="mx-2 font-Text-principale mt-10 text-[40px] text-purple-700 lg:text-[100px]">
      {{ unProjet?.Titre4 }}
    </h1>
  </div>
</template>
