<script setup lang="ts">
import { useForwardPropsEmits, type SelectRootProps, type SelectRootEmits } from 'radix-vue'
import type { Travel } from '~/types/travel'

const props = defineProps<SelectRootProps & { travels: Travel[] }>()
const emits = defineEmits<SelectRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Select v-bind="forwarded">
    <SelectTrigger>
      <SelectValue placeholder="Select a destiny" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <template
          v-for="travel in props.travels"
          :key="travel.id"
        >
          <SelectItem :value="travel.id as string">
            {{ travel.name }}
          </SelectItem>
        </template>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
