<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { VisuallyHidden } from 'radix-vue'

const props = defineProps<{ title: string }>()
const isDesktop = useMediaQuery('(min-width: 768px)')
const isOpen = defineModel<boolean>({ required: true })
</script>

<template>
  <client-only>
    <template v-if="isDesktop">
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
    <template v-else>
      <Drawer v-model:open="isOpen">
        <DrawerContent>
          <DrawerHeader class="text-left">
            <DrawerTitle>{{ props.title }}</DrawerTitle>
          </DrawerHeader>
          <slot />
          <DrawerFooter class="pt-2">
            <DrawerClose as-child>
              <Button variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </template>
  </client-only>
</template>
