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
        <div class="flex flex-col items-center h-20 w-36">
            <img :src="travel.picture" />
        </div>
    </div>
</template>