<script setup lang="ts">

import type { Booking } from '~/types/booking';
import { newCustomer } from '~/lib/customer'
import type { Travel } from '~/types/travel';
import type { Customer } from '~/types/customer';
import { refreshBooking } from '~/lib/booking';
const route = useRoute()
const { id } = route.params


const booking: Ref<Booking | null> = ref<Booking | null>(null)


const step = ref(route.query.step as string)
watch(() => route.query.step, (value) => { if (value) step.value = value as string })

const handleTravelForm = async (travel: Travel) => {
    await $fetch(`/api/booking/${id}`, { method: 'PUT', body: { type: 'travel', travel } })
    booking.value = await refreshBooking(id as string) as Booking;
    navigateTo('?step=2')
}

const handleCustomerForm = async (customer: Customer) => {
    await $fetch(`/api/booking/${id}`, { method: 'PUT', body: { type: 'customer', customer } })
    booking.value = await refreshBooking(id as string) as Booking;
    navigateTo('?step=3')
}

const handlePaymentForm = async (bookingFromForm: Booking) => {
    console.log('here i am', bookingFromForm)
    await $fetch(`/api/booking/${id}`, { method: 'PUT', body: { type: 'paymentAndNotes', bookingFromForm } })
    booking.value = await refreshBooking(id as string) as Booking;
    navigateTo('/booking')
}

booking.value = await refreshBooking(id as string) as Booking;
</script>


<template>
    <div class="flex flex-col w-auto lg:mx-36" v-if="booking">
        <div class="items-center grid grid-cols-6  bg-opacity-20">
            <BookingNewBreadcrumb class="col-start-0 md:col-start-3 col-span-6 mb-8 " :step="step" />
            <template v-if="step === '1'">
                <BookingNewTravelForm class="col-span-6" :travel="booking.travel" @submit="handleTravelForm" />
            </template>
            <template v-else-if="step === '2'" class="col-span-6">
                <BookingNewCustomerForm class="col-span-6" :customer="booking.customer || newCustomer()"
                    @submit="handleCustomerForm" />
            </template>
            <div v-else-if="step === '3'" class="col-span-6">
                <BookingNewPaymentNotesForm :booking="booking" @submit="handlePaymentForm" />
            </div>
        </div>
    </div>
</template>