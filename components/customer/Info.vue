<script setup lang="ts">
import type { Customer } from '~/types/customer';

const props = defineProps<{ customer: Customer }>();
</script>

<template>
    <div class=" grid md:grid-cols-4">
        <div class="inline-flex col-span-4">
            <p class="text-gray-500 mr-1">Name:</p>
            <p>{{ props.customer.name }}</p>
        </div>
        <div class="inline-flex col-span-4">
            <p class="text-gray-500 mr-1">Email:</p>
            <p>{{ props.customer.email }}</p>
        </div>
        <div class="inline-flex col-span-4">
            <p class="text-gray-500 mr-1">gender:</p>
            <p>{{ props.customer.gender }}</p>
        </div>
        <div class="inline-flex col-span-4">
            <p class="text-gray-500 mr-1">Age:</p>
            <p>{{ props.customer.age }}</p>
        </div>
    </div>
</template>
