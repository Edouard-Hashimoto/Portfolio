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
      class="pb-[-700px]"
    />
    <p class="absolute left-[50px] top-[1200px] w-1/2 font-paragraph text-base text-white">
      {{ unProjet?.para1 }}
    </p>
  </div>
</template>
