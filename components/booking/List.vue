<script setup lang="ts">
import type { Booking } from '~/types/booking';

const props = defineProps<{ items: Booking[] }>()
</script>
<template>
    <div>
        <BookingItem class="mb-8" v-for="booking in props.items" :key="booking.id" :booking="booking"
            :travel="booking.travel" />
    </div>
</template>
