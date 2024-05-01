<script setup lang="ts">
const props = defineProps<{ rating: number }>()
const total = 5
const hasDecimal = computed(() => props.rating % 1 !== 0)
const empty = computed(() => Math.floor(total - props.rating))
const filled = computed(() => Math.floor(props.rating))
</script>

<template>
  <div
    v-bind="$attrs"
    class="flex flex-col md:flex-row color-gray-600 invisible md:visible"
  >
    <img
      v-for="n in filled"
      :key="n"
      src="/rating/filled.svg"
    >
    <img
      v-if="hasDecimal"
      src="/rating/half.svg"
    >
    <img
      v-for="n in empty"
      :key="`${n}filled`"
      src="/rating/empty.svg"
    >
  </div>
</template>
