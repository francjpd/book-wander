<script setup lang="ts">
import { createReusableTemplate, useMediaQuery } from '@vueuse/core';
import { travelSchema, type Travel } from '~/types/travel'
import { useForm } from 'vee-validate'

const form = useForm({
    validationSchema: travelSchema,
})

const props = withDefaults(defineProps<{ travel: Travel }>(), {
    travel: () => ({
        continent: 'Europe',
        departure: new Date(),
        description: 'asd',
        name: '',
        picture: '',
        price: 0,
        returnDate: new Date()
    })
})

const [UseTemplate, GridForm] = createReusableTemplate()

const emits = defineEmits<{
    (e: 'submit', payload: {
        departure: string;
        description: string;
        name: string;
        picture: string;
        price: number;
        returnDate: string;
    }): void
}>()

const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)


const onSubmit = form.handleSubmit((values) => {
    emits('submit', values)
})
</script>

<template>
    <div>

        <UseTemplate>
            <div class="flex flex-col items-center w-full">
                <form @submit="onSubmit" class="flex flex-col w-80  gap-2">
                    <FormField v-slot="{ componentField }" name="continent">
                        <FormItem>
                            <FormControl>
                                <SelectContinent :value="props.travel.continent" v-bind="componentField" />
                            </FormControl>
                        </FormItem>
                        <FormMessage />
                    </FormField>

                    <FormField v-slot="{ componentField }" name="departure">
                        <FormItem>
                            <FormControl>
                                <Input type="date" :value="props.travel.departure"  placeholder="Departure" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>


                    <FormField v-slot="{ componentField }" name="description">
                        <FormItem>
                            <FormControl>
                                <Textarea :value="props.travel.description" type="text" placeholder="Description"
                                    v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="name">
                        <FormItem>
                            <FormControl>
                                <Input type="text" :value="props.travel.name"   placeholder="Destiny name" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="picture">
                        <FormItem>
                            <FormControl>
                                <Input type="text" :value="props.travel.picture"   placeholder="Picture" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="price">
                        <FormItem>
                            <FormControl>
                                <Input type="number" :value="props.travel.price"   placeholder="Price" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="returnDate">
                        <FormItem>
                            <FormControl>
                                <Input type="date" :value="props.travel.returnDate"   placeholder="Return Date" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <Button class="w-80 bg-scooter-400 hover:bg-scooter-600" type="submit">Submit</Button>
                </form>

            </div>


        </UseTemplate>


        <Dialog v-if="isDesktop" v-model:open="isOpen">
            <DialogTrigger as-child>
                <Button class="text-gray-900 font-semibold bg-lightning-yellow-500 hover:bg-lightning-yellow-600">
                    Add a Travel
                </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add a travel</DialogTitle>
                </DialogHeader>
                <GridForm />
            </DialogContent>
        </Dialog>

        <Drawer v-else v-model:open="isOpen">
            <DrawerTrigger as-child>
                <Button class="text-gray-900 font-semibold bg-lightning-yellow-500 hover:bg-lightning-yellow-600">
                    Add a Travel
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader class="text-left">
                    <DrawerTitle>Add a Travel</DrawerTitle>
                </DrawerHeader>
                <GridForm />
                <DrawerFooter class="pt-2">
                    <DrawerClose as-child>
                        <Button variant="outline">
                            Cancel
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    </div>
</template>