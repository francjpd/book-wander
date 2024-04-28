<script setup lang="ts">
import { format } from 'date-fns';
import type { Travel } from '~/types/travel';

const props = defineProps<{ travel: Travel }>();

const formatDate = (date: Date) => {
  return format(date, 'dd/MM/yyyy')
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4 w-full sm:justify-items-center md:justify-items-start px-8">
    <div class="sm:col-span-2 md:col-span-1 flex flex-col items-center h-36 w-56">
      <img :src="props.travel.picture" class="object-cover h-full w-12/12 rounded-md" alt="Destiny's picture">
    </div>

    <div class="flex flex-col justify-items-center">
      <p class="text-md font-bold text-fuzzy-wuzzy-brown-600">{{ props.travel.name }}</p>
      <div class="inline-flex gap-1">
        <p class="text-gray-500">price:</p>
        <p class="">{{ props.travel.price }}</p>
        <img src="/eur.svg" alt="Eur">
      </div>
      <div class="inline-flex gap-4">

        <p class="text-gray-500">Departure: </p>
        <span>{{ formatDate(props.travel.departure) }}</span>
        <p class="text-gray-500">Return </p>
        <span>{{ formatDate(props.travel.departure) }}</span>
      </div>
    </div>


  </div>
</template>
