<script setup lang="ts">
import { type Travel } from '~/types/travel'
import { newTravel, } from '~/lib/travel'


const props = defineProps<{ travel?: Travel }>()
const form: Ref<HTMLFormElement | null> = ref(null);

const { data } = await useFetch<Travel[]>('/api/travels/');

const travels: Ref<Travel[]> = ref(data.value || [])

const internalTravel: Ref<{ travel: Travel }> = ref<{ travel: Travel }>({ travel: props.travel as Travel || newTravel() })

const emits = defineEmits<{
    (e: 'submit', payload: Travel): void
}>()


const onSubmit = ((ev: Event) => {
    ev.preventDefault()
    const travel = travels.value.find(travel => form.value && travel.id === form.value.travel.value)
    emits('submit', travel as Travel)

})

</script>

<template>
    <div>
        <div class="flex flex-col items-center w-full">
            <form ref="form" @submit="onSubmit" class="flex flex-col w-80  gap-2 text-xs">
                <FormField v-slot="{ componentField }" :value="internalTravel.travel.id" name="travel">
                    <FormItem>
                        <FormLabel>Travel</FormLabel>
                        <FormControl>
                            <BookingNewSelectTravel v-bind="componentField" :travels="travels as Travel[]" />
                        </FormControl>
                    </FormItem>
                    <FormMessage />
                </FormField>


                <Button class="w-80 bg-scooter-400 hover:bg-scooter-600" type="submit">Next</Button>
            </form>
        </div>
    </div>
</template>