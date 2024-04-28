<script setup lang="ts">
import type { Booking } from '~/types/booking';

const bookings = ref<Booking[]>([]);


const { data } = await useFetch<Booking[]>('/api/booking');
bookings.value = data!.value || [];


</script>
<template>
    <BookingList :items="bookings" />
</template>
