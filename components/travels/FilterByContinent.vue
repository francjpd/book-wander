<script setup lant="ts">
const contintents = [
    { value: 'all', label: 'Filter by Continent' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Europe', label: 'Europe' },
    { value: 'North America', label: 'North America' },
    { value: 'South America', label: 'South America' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Antartica', label: 'Antartica' },
]
</script>
<template>
    <TravelsFilter v-bind="$attrs" class="col-span-3 md:col-span-2 lg:col-span-2 w-full"
        placeholder="Filter by Continent" :items="contintents" />
</template>