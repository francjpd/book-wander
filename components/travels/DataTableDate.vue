<script setup lang="ts">
import { format } from 'date-fns/fp'
import type { Travel } from '~/types/travel'

const props = defineProps<{
  travel: Travel
}>()

const dayFormat = format('dd')
const monthFormat = format('MMM')
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <p class="text-xl md:text-4xl  text-scooter-400 font-bold">
        {{ dayFormat(props.travel.departure) }}
      </p>
      <p class="text-fuzzy-wuzzy-brown-400 font-semibold sm:tracking md:tracking-widest">
        {{ monthFormat(props.travel.departure).toUpperCase() }}
      </p>
    </div>
  </div>
</template>
