<script setup lang="ts">

import type { Booking } from '~/types/booking';
import { newCustomer } from '~/lib/customer'
import type { Travel } from '~/types/travel';
import type { Customer } from '~/types/customer';
const route = useRoute()
const { id } = route.params


const booking: Ref<Booking | null> = ref<Booking | null>(null)

const refreshData = async () => {
    const { data } = await useFetch<Booking>(`/api/booking/new/${id}`)
    booking.value = data.value;
}


const step = ref(route.query.step as string)
watch(() => route.query.step, (value) => { if (value) step.value = value as string })

const handleTravelForm = async (travel: Travel) => {
    await $fetch(`/api/booking/new/${id}`, { method: 'PUT', body: { type: 'travel', travel } })
    await refreshData();
    navigateTo('?step=2')
}

const handleCustomerForm = async (customer: Customer) => {
    //@ts-ignore
    await $fetch(`/api/booking/new/${id}`, { method: 'PUT', body: { type: 'customer', customer } })
    await refreshData();
    navigateTo('?step=3')
}

await refreshData();
</script>


<template>
    <div class="flex flex-col w-auto lg:mx-36" v-if="booking">
        <div class="items-center grid grid-cols-6  bg-opacity-20">
            <BookingNewBreadcrumb class="col-span-6 mb-8 " :step="step" />
            <template v-if="step === '1'">
                <BookingNewTravelForm class="col-span-6" :travel="booking.travel" @submit="handleTravelForm" />
            </template>
            <template v-else-if="step === '2'" class="col-span-6">
                <BookingNewCustomerForm class="col-span-6" :customer="booking.customer || newCustomer()"
                    @submit="handleCustomerForm" />
            </template>
            <div v-else-if="step === '3'" class="col-span-6">
                Todo
            </div>
        </div>
    </div>
</template>