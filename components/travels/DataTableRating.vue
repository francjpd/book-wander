<script setup lang="ts">
const props = defineProps<{ rating: number }>()
const total = 5;
const hasDecimal = computed(() => props.rating % 1 !== 0)
const empty = computed(() => Math.floor(total - props.rating))
const filled = computed(() => Math.floor(props.rating))
</script>
<template>
    <div v-bind="$attrs" class="flex flex-col md:flex-row color-gray-600 invisible md:visible">
        <img src="/rating/filled.svg" v-for="n in filled" :key="n" />
        <img src="/rating/half.svg" v-if="hasDecimal" />
        <img src="/rating/empty.svg" v-for="n in empty" :key="`${n}filled`" />
    </div>
</template>