<script setup lang="ts">
import type { Travel } from '~/types/travel'

const props = defineProps<{
  travel: Travel
}>()
</script>

<template>
  <div>
    <Dialog>
      <DialogTrigger>
        <div class="flex flex-col items-center md:h-36 md:w-56">
          <img
            :src="props.travel.picture"
            class="object-cover h-full w-12/12 rounded-md"
            :alt="`${props.travel.name}'s thumbnail picture`"
          >
        </div>
      </DialogTrigger>
      <DialogContent>
        <img
          :src="props.travel.picture"
          class="object-cover h-full w-12/12 rounded-md"
          :alt="`${props.travel.name}'s full size picture`"
        >
      </DialogContent>
    </Dialog>
  </div>
</template>
