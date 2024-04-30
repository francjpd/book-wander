<script setup lang="ts">
import type { Booking } from '~/types/booking';
import type { Customer } from '~/types/customer';
import type { Travel } from '~/types/travel';

const props = defineProps<{ booking: Booking, travel: Travel }>();
const emit = defineEmits(['submit'])
</script>

<template>
    <div class="border-x rounded-sm items-center p-4 ">
        <p class="text-3xl font-bold text-fuzzy-wuzzy-brown-400 px-2 md:px-8 my-4">{{ props.travel.name.toUpperCase() }}</p>
        <BookingTravelInfo :travel="props.travel" />
        <div class="border-t border-gray-300 my-4" />
        <h3 class="text-xl font-light text-scooter-600 px-2 md:px-8">Customer info:</h3>
        <CustomerInfo :customer="props.booking.customer as Customer" />
        <div class="border-t border-gray-300 my-4" />
        <h3 class="text-xl font-light text-scooter-600 px-2 md:px-8">Notes</h3>
        <div class="px-2 md:px-8">
            <BookingNotes v-model="booking.notes" @submit="emit('submit', booking)" />
        </div>
    </div>
</template>
