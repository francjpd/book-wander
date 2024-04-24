<script setup lang="ts">
import { enUS } from 'date-fns/locale'
import { formatWithOptions, differenceInDays } from 'date-fns/fp'
import type { Travel } from '~/types/travel';

const props = defineProps<{
    travel: Travel
}>()

const dateToString = formatWithOptions({ locale: enUS }, 'd MMMM')

const totalDays = computed(() => differenceInDays(props.travel.departure, props.travel.returnDate))

</script>
<template>
    <div>
        <div class="flex flex-col">
            <p class="font-semibold">{{ props.travel.name.toUpperCase() }}</p>
            <div class="inline-flex text-sm font-semibold">
                <p class=""> {{ `from ${dateToString(props.travel.departure)}` }} to </p>
                <p class="ml-2"> {{ dateToString(props.travel.returnDate) }}</p>
            </div>
            <p class="text-gray-400">{{ totalDays }} days</p>

        </div>
    </div>
</template>