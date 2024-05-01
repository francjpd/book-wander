<script setup lang="ts">
import type { Booking } from '~/types/booking'
import type { Travel } from '~/types/travel'
import type { Customer } from '~/types/customer'

const route = useRoute()
const router = useRouter()
const { id } = route.params
const booking = useBookingState()

const step = ref(route.query.step as string)
watch(
  () => route.query.step,
  (value) => {
    if (value) step.value = value as string
  },
)

const reFetchBooking = async (stepNumber?: number) => {
  booking.value = await refreshBooking(id as string) as Booking
  stepNumber && router.push({ path: route.path, query: { step: stepNumber } })
}

const handleTravelForm = async (travel: Travel) => {
  await $fetch(`/api/booking/${id}`, { method: 'PUT', body: { type: 'travel', travel } })
  await reFetchBooking(2)
}

const handleCustomerForm = async (customer: Customer) => {
  await $fetch(`/api/booking/${id}`, { method: 'PUT', body: { type: 'customer', customer } })
  await reFetchBooking(3)
}

const handlePaymentForm = async (bookingFromForm: Booking) => {
  await $fetch(`/api/booking/${id}`, { method: 'PUT', body: { type: 'paymentAndNotes', booking: bookingFromForm } })
  await reFetchBooking()
  navigateTo('/booking')
}

try {
  booking.value = await refreshBooking(id as string) as Booking
}
catch (error) {
  createError({ statusCode: 404, statusMessage: 'Id not found' })
}
</script>

<template>
  <div
    v-if="booking"
    class="flex flex-col w-auto lg:mx-36 "
  >
    <div class="items-center grid grid-cols-6 bg-scooter-50 w-auto m-auto p-8">
      <BookingNewBreadcrumb
        class="col-start-0 col-span-6 mb-8 "
        :step="step"
      />
      <BookingNewTravelForm
        v-if="!step || step === '1'"
        class="col-span-6"
        @submit="handleTravelForm"
      />
      <BookingNewCustomerForm
        v-else-if="step === '2'"
        class="col-span-6"
        @submit="handleCustomerForm"
      />
      <div
        v-else-if="step === '3'"
        class="col-span-6"
      >
        <BookingNewPaymentNotesForm @submit="handlePaymentForm" />
      </div>
    </div>
  </div>
</template>
