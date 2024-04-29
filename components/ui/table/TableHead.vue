<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    :class="cn('h-12 px-0 md:px-4 text-left align-middle font-medium text-fuzzy-wuzzy-brown-500 [&:has([role=checkbox])]:pr-0 dark:text-fuzzy-wuzzy-brown-400 bg-slate-100', props.class)">
    <slot />
  </th>
</template>
