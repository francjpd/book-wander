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
        <div class="flex flex-col items-center md:h-36 md:w-56">
            <img :src="travel.picture" class="object-cover h-full w-12/12 rounded-md" alt="Destiny's picture" />
        </div>
    </div>
</template>