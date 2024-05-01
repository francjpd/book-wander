<script setup lang="ts">
import { format } from 'date-fns'
import type { Travel } from '~/types/travel'

const props = defineProps<{ travel: Travel }>()

const formatDate = (date: Date) => {
  return format(date, 'dd/MM/yyyy')
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4 w-full sm:justify-items-center md:justify-items-start px-2 md:px-8">
    <div class="col-span-2 md:col-span-1 flex flex-col  h-36 w-56 items-start">
      <img
        :src="props.travel.picture"
        class="object-cover h-full w-12/12 rounded-md"
        alt="Destiny's picture"
      >
    </div>

    <div class="flex flex-col justify-items-center">
      <div class="flex flex-col md:flex-row gap-x-4">
        <div class="inline-flex gap-x-2 items-center">
          <p class="text-gray-500">
            Departure:
          </p>
          <span class="font-bold text-lg text-gray-800">{{ formatDate(props.travel.departure) }}</span>
        </div>
        <div class="inline-flex gap-x-2 items-center">
          <p class="text-gray-500">
            Return
          </p>
          <span class="font-bold text-lg text-gray-800">{{ formatDate(props.travel.departure) }}</span>
        </div>
      </div>
      <div class="inline-flex gap-1">
        <p class="text-gray-500">
          Price:
        </p>
        <p class="">
          {{ props.travel.price }}
        </p>
        <img
          src="/eur.svg"
          alt="Eur"
        >
      </div>
      <slot />
    </div>
  </div>
</template>
