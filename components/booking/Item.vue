<script setup lang="ts">
import type { Booking } from '~/types/booking';
import type { Customer } from '~/types/customer';
import type { Travel } from '~/types/travel';

const props = defineProps<{ booking: Booking, travel: Travel }>();
</script>

<template>
    <div class="border rounded-sm items-center p-4">
        <h3 class="text-xl font-light text-scooter-600 px-8">Travel information</h3>
        <BookingTravelInfo :travel="props.travel" />
        <div class="border-t border-gray-300 my-4" />
        <h3 class="text-xl font-light text-scooter-600 px-8">Customer information</h3>
        <CustomerInfo :customer="props.booking.customer as Customer" />
        <div class="border-t border-gray-300 my-4" />
        <h3 class="text-xl font-light text-scooter-600 px-8">Notes</h3>
        <div class="px-8">
            <p class="text-lightning-yellow-700 font-medium">{{ booking.notes }}</p>
        </div>
    </div>
</template>
