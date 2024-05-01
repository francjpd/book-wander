<script setup lang="ts">
import { type Travel } from '~/types/travel'

const form: Ref<HTMLFormElement | null> = ref(null)
const booking = useBookingState()

const { data } = await useFetch<Travel[]>('/api/travels/')

const travels: Ref<Travel[]> = ref(data.value || [])

const internalTravel: Ref<{ travel: Travel }> = ref<{ travel: Travel }>({ travel: booking.value.travel as Travel || newTravel() })

const emits = defineEmits<{
  (e: 'submit', payload: Travel): void
}>()

const onSubmit = (ev: Event) => {
  ev.preventDefault()
  const travel = travels.value.find(travel => form.value && travel.id === form.value.travel.value)
  emits('submit', travel as Travel)
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center w-full">
      <form
        ref="form"
        class="flex flex-col w-80  gap-2 text-xs"
        @submit="onSubmit"
      >
        <FormField
          v-slot="{ componentField }"
          :value="internalTravel.travel.id"
          name="travel"
        >
          <FormItem>
            <FormLabel>Travel</FormLabel>
            <FormControl>
              <BookingNewSelectTravel
                v-bind="componentField"
                :travels="travels as Travel[]"
              />
            </FormControl>
          </FormItem>
          <FormMessage />
        </FormField>

        <Button
          class="w-80"
          type="submit"
        >
          Next
        </Button>
      </form>
    </div>
  </div>
</template>
