<script setup lang="ts">
const props = defineProps<{ amount: number | string }>()
</script>
<template>
    <div class="flex flex-row justify-center">
        <p>{{ props.amount }}</p>
        <img class="w-4 h-5" src="/eur.svg" />
    </div>
</template>