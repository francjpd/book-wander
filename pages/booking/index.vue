<script setup lang="ts">
import type { Booking } from '~/types/booking';

const bookings = ref<Booking[]>([]);


const { data } = await useFetch<Booking[]>('/api/booking');
bookings.value = data!.value || [];

const createdBooking = computed(() => bookings.value.filter(booking => booking.status === 'created'))

</script>
<template>
    <div class="flex flex-col gap-10 w-auto sm:mx-8 lg:mx-36">
        <BookingList :items="createdBooking" />
    </div>

</template>
