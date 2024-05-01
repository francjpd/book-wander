<script setup lang="ts">
import { enUS } from 'date-fns/locale'
import { formatWithOptions, differenceInDays } from 'date-fns/fp'
import type { Travel } from '~/types/travel';

const props = defineProps<{
    travel: Travel
}>()

const dateToString = formatWithOptions({ locale: enUS }, 'dd MMM')

const totalDays = computed(() => differenceInDays(props.travel.departure, props.travel.returnDate))

</script>
<template>
    <div>
        <div class="flex flex-col text-xs  md:text-base pl-1">
            <p class="font-semibold">{{ props.travel.name.toUpperCase() }}</p>
            <div class="flex flex-col md:flex-row text-sm font-semibold">
                <p class=""> {{ `from ${dateToString(props.travel.departure)}` }}</p>
                <p class="sm:md-0 md:ml-2">To {{ dateToString(props.travel.returnDate) }}</p>
            </div>
            <p class="text-gray-400">{{ totalDays }} days</p>

        </div>
    </div>
</template>