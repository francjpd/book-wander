<script setup lang="ts">
import { useForwardPropsEmits, type SelectRootProps, type SelectRootEmits } from 'radix-vue'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const paymentTypes = ['Credit', 'Transfer', 'Paypal', 'Revolut']
</script>

<template>
  <Select v-bind="forwarded">
    <SelectTrigger>
      <SelectValue placeholder="Type of payment" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <template
          v-for="paymentType in paymentTypes"
          :key="paymentType"
        >
          <SelectItem :value="paymentType">
            {{ paymentType }}
          </SelectItem>
        </template>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
