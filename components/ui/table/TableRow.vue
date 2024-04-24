<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr :class="cn('border-b transition-colors data-[state=selected]:bg-fuzzy-wuzzy-brown-100 dark:hover:bg-fuzzy-wuzzy-brown-800/50 dark:data-[state=selected]:bg-fuzzy-wuzzy-brown-800', props.class)">
    <slot />
  </tr>
</template>
