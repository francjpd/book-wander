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

const createBook = async () => {
    try {
        const { id } = await $fetch<Booking>('/api/booking', {
            method: 'POST',
        })

        if (id) await navigateTo({ path: `/booking/new/${id}` })
    } catch (error) {
        throw createError({ statusCode: 404, statusMessage: 'Id not found' })
    }
}

</script>
<template>
    <div class="flex flex-col gap-10 w-auto sm:mx-8 lg:mx-36">
        <div
            class="w-auto items-center grid grid-cols-6 gap-4 bg-scooter-200  backdrop-blur-sm  bg-opacity-20 sticky top-[82px] z-10 p-2 ">
            <Button class="col-start-6" variant="secondary" @click="createBook">Book a travel</Button>
        </div>
        <BookingItem class="mb-12" v-for="booking in createdBooking" :key="booking.id" :booking="booking"
            :travel="booking.travel" @submit="handleSubmit" />
    </div>

</template>
