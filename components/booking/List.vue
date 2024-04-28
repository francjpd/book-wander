<script setup lang="ts">
import type { Booking } from '~/types/booking';

const props = defineProps<{ items: Booking[] }>()
</script>
<template>
    <div class="flex flex-col gap-10 container w-auto sm:mx-8 lg:mx-36">
        <BookingItem class="" v-for="booking in props.items" :key="booking.id" :booking="booking" :travel="booking.travel" />
    </div>
</template>
