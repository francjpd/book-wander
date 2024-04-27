<script setup lang="ts">
import { enUS } from 'date-fns/locale'
import { formatWithOptions } from 'date-fns/fp'
import type { Travel } from '~/types/travel';

const props = defineProps<{
    travel: Travel
}>()

const dayFormat = formatWithOptions({ locale: enUS }, 'dd')
const monthFormat = formatWithOptions({ locale: enUS }, 'MMM')


</script>
<template>
    <div>
        <div class="flex flex-col items-center">
            <p class="text-4xl text-scooter-400 font-bold">{{ dayFormat(props.travel.departure) }}</p>
            <p class="text-fuzzy-wuzzy-brown-400 font-semibold tracking-widest">{{ monthFormat(props.travel.departure).toUpperCase() }}</p>


        </div>
    </div>
</template>