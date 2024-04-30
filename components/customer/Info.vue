<script setup lang="ts">
import type { Customer } from '~/types/customer';

const props = defineProps<{ customer: Customer }>();
</script>

<template>
    <div class=" grid grid-cols-1 md:grid-cols-2">
        <div class="inline-flex">
            <p class="text-gray-500">Name:</p>
            <p>{{ props.customer.name }}</p>
        </div>
        <div class="inline-flex">
            <p class="text-gray-500">Email:</p>
            <p>{{ props.customer.email }}</p>
        </div>
        <div class="inline-flex">
            <p class="text-gray-500">gender:</p>
            <p>{{ props.customer.gender }}</p>
        </div>
        <div class="inline-flex">
            <p class="text-gray-500">Age:</p>
            <p>{{ props.customer.age }}</p>
        </div>
    </div>
</template>
