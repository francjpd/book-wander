<script setup lang="ts">
import { customerSchema } from '~/lib/customer'
import { useForm } from 'vee-validate'
import { format } from 'date-fns';
import type { Customer } from '~/types/customer';

const form = useForm({
    validationSchema: customerSchema,
})

const props = defineProps<{ customer: Customer }>()

const internalCustomer: Ref<Customer> = ref<Customer>(props.customer)

watch(() => props.customer, (value) => {
    if (value) internalCustomer.value = value
}, { immediate: true })

const emits = defineEmits<{
    (e: 'submit', payload: Customer): void
}>()


const onSubmit = form.handleSubmit((values) => {
    const travel: Customer = { ...values } as unknown as Customer;
    if (internalCustomer.value.id) travel.id = internalCustomer.value.id
    emits('submit', travel)
})

</script>

<template>
    <div>
        <div class="flex flex-col items-center w-full">
            <form @submit="onSubmit" class="flex flex-col w-80  gap-2 text-xs">
                <FormField v-slot="{ componentField }" :value="internalCustomer.name" name="name">
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Name" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" :value="internalCustomer.email" name="email">
                    <FormItem>
                        <FormLabel>email</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Email" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" :value="internalCustomer.phone" name="phone">
                    <FormItem>
                        <FormLabel>Phone </FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Phone" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" :value="internalCustomer.age" name="age">
                    <FormItem>
                        <FormLabel>Age </FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="Age" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <Button class="w-80 bg-scooter-400 hover:bg-scooter-600" type="submit">Next</Button>
            </form>
        </div>
    </div>
</template>