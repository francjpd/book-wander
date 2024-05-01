<script setup lang="ts">
import { useForm } from 'vee-validate'
import SelectPaymentType from './SelectPaymentType.vue'
import { bookingSchema } from '~/lib/booking'

import type { Booking } from '~/types/booking'

const form = useForm({
  validationSchema: bookingSchema,
})

const props = defineProps<{ booking: Booking }>()

const internalBooking: Ref<Booking> = ref<Booking>(props.booking)

watch(() => props.booking, (value) => {
  if (value) internalBooking.value = value
}, { immediate: true })

const emits = defineEmits<{
  (e: 'submit', payload: Booking): void
}>()

const onSubmit = form.handleSubmit((values) => {
  const booking: Booking = { ...values } as unknown as Booking
  emits('submit', booking)
})
</script>

<template>
  <div>
    <div class="flex flex-col items-center w-full">
      <form
        class="flex flex-col w-80  gap-2 text-xs"
        @submit="onSubmit"
      >
        <FormField
          v-slot="{ componentField }"
          :value="internalBooking.paymentType"
          name="paymentType"
        >
          <FormItem>
            <FormLabel>Payment type</FormLabel>
            <FormControl>
              <SelectPaymentType v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          :value="internalBooking.notes"
          name="notes"
        >
          <FormItem>
            <FormLabel>Notes</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Notes"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button
          class="w-80 bg-scooter-400 hover:bg-scooter-600 text-white"
          type="submit"
        >
          Book travel!
        </Button>
      </form>
    </div>
  </div>
</template>
