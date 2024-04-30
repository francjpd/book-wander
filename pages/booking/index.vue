<script setup lang="ts">

import { refreshBooking } from '~/lib/booking';
import type { Booking } from '~/types/booking';


const bookings: Ref<Booking[]> = ref<Booking[]>([]);


const { data } = await useFetch<Booking[]>('/api/booking');
bookings.value = data!.value || [];

const createdBooking = computed(() => bookings.value.filter(booking => booking.status === 'created'))

const handleSubmit = async (booking: Booking) => {
    await $fetch(`/api/booking/${booking.id}`, { method: 'PUT', body: { type: 'booking', booking } })
    bookings.value = await refreshBooking() as Booking[];
}

</script>
<template>
    <div class="flex flex-col gap-10 w-auto sm:mx-8 lg:mx-36">
        <BookingItem class="mb-12" v-for="booking in createdBooking" :key="booking.id" :booking="booking"
            :travel="booking.travel" @submit="handleSubmit" />
    </div>

</template>
