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
        class="mx-auto w-[300px] self-start sm:mx-0 sm:w-1/4 lg:mt-[-150px]"
      />
      <ImgPb
        v-if="unProjet.Image3"
        :filename="unProjet?.Image3"
        :record="unProjet"
        class="mx-auto w-[200px] self-start sm:mx-0 sm:w-[200px] lg:mr-96"
      />
    </div>

    <h1 class="mx-2 font-Text-principale text-[80px] text-purple-700 lg:text-2xl">
      {{ unProjet?.Titre3 }}
    </h1>
    <p class="mx-2 font-paragraph text-sm sm:w-1/2 lg:text-base">
      {{ unProjet?.Para3 }}
    </p>
    <h1 class="mx-2 mt-10 font-Text-principale text-[40px] text-purple-700 lg:text-[100px]">
      {{ unProjet?.Titre4 }}
    </h1>
    <div class="flex flex-wrap items-center justify-center sm:flex-col lg:flex-row">
      <ImgPb
        v-if="unProjet.Image4"
        :filename="unProjet?.Image4"
        :record="unProjet"
        class="w-full sm:mb-4 sm:w-1/3 lg:h-[450px] m-2"
      />
      <ImgPb
        v-if="unProjet.Image5"
        :filename="unProjet?.Image5"
        :record="unProjet"
        class="w-full sm:mb-4 sm:w-1/3 lg:h-[450px] m-2"
      />
    </div>

    <div class="my-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <p class="mx-2 font-paragraph text-sm sm:w-1/2 lg:text-base">
        {{ unProjet?.Para4 }}
      </p>

      <ImgPb
        v-if="unProjet.Image6"
        :filename="unProjet?.Image6"
        :record="unProjet"
        class="h-40 w-40 sm:h-[500px] sm:w-1/3"
      />
      <ImgPb
        v-if="unProjet.Image7"
        :filename="unProjet?.Image7"
        :record="unProjet"
        class="h-40 w-40 sm:h-[500px] sm:w-1/3"
      />
      <ImgPb
        v-if="unProjet.image8"
        :filename="unProjet?.image8"
        :record="unProjet"
        class="mx-auto w-[200px] self-start sm:mx-0 sm:w-[200px] lg:mr-96 lg:mt-[-200px]"
      />
      <ImgPb
        v-if="unProjet.image9"
        :filename="unProjet?.image9"
        :record="unProjet"
        class="mx-auto w-[300px] self-start sm:mx-0 sm:w-1/4 lg:mt-[-400px]"
      />
    </div>
  </div>
</template>
