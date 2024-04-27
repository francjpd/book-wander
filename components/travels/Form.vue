<script setup lang="ts">
import { type Travel } from '~/types/travel'
import { travelSchema } from '~/lib/travel'
import { useForm } from 'vee-validate'

const form = useForm({
    validationSchema: travelSchema,
})

const props = defineProps<{ travel: Travel }>()

const internalTravel: Ref<Travel> = ref<Travel>(props.travel)

watch(() => props.travel, (value) => {
    console.log(value)
    if (value) internalTravel.value = value
}, { immediate: true })

const emits = defineEmits<{
    (e: 'submit', payload: Travel): void
}>()


const onSubmit = form.handleSubmit((values) => {
    const travel: Travel = { ...values };
    if (internalTravel.value.id) travel.id = internalTravel.value.id
    emits('submit', travel)
})
</script>

<template>
    <div>
        <div class="flex flex-col items-center w-full">
            <form @submit="onSubmit" class="flex flex-col w-80  gap-2 text-xs">
                <FormField v-slot="{ componentField }" :value="internalTravel.name" name="name">
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Destiny name" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" :value="internalTravel.continent" name="continent">
                    <FormItem>
                        <FormLabel>Continent</FormLabel>
                        <FormControl>
                            <SelectContinent v-bind="componentField" />
                        </FormControl>
                    </FormItem>
                    <FormMessage />
                </FormField>

                <div class="inline-flex justify-between">
                    <FormField v-slot="{ componentField }" :value="internalTravel.departure" name="departure">
                        <FormItem>
                            <FormLabel>Departure</FormLabel>
                            <FormControl>
                                <Input type="date" placeholder="Departure" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" :value="internalTravel.returnDate" name="returnDate">
                        <FormItem>
                            <FormLabel>Return</FormLabel>
                            <FormControl>
                                <Input type="date" placeholder="Return Date" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <FormField v-slot="{ componentField }" :value="internalTravel.description" name="description">
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea type="text" placeholder="Description" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>



                <FormField v-slot="{ componentField }" :value="internalTravel.picture" name="picture">
                    <FormItem>
                        <FormLabel>Picture</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Picture" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <div class="inline-flex justify-between">
                    <FormField v-slot="{ componentField }" :value="internalTravel.price" name="price">
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <div class="relative items-center">
                                    <Input type="number" placeholder="Price" v-bind="componentField" />
                                    <span class="absolute end-4 inset-y-0 flex items-center justify-center">
                                        <img src="/eur.svg" alt="Eur">
                                    </span>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" :value="internalTravel.rating" name="rating">
                        <FormItem>
                            <FormLabel>Rating</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Rating" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                </div>
                <Button class="w-80 bg-scooter-400 hover:bg-scooter-600" type="submit">Submit</Button>
            </form>
        </div>
    </div>
</template>