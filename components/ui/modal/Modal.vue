<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { VisuallyHidden } from 'radix-vue'

const props = defineProps<{ title: string }>()
const isOpen = defineModel<boolean>({ required: true })
</script>

<template>
    <Dialog v-model:open="isOpen">
      <DialogContent class="sm:max-w-[425px]">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>{{ props.title }}</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        <slot />
      </DialogContent>
    </Dialog>
</template>
