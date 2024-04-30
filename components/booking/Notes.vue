<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { z } from 'zod';

const model = defineModel<string>()
const isEditing = ref(false);
const toggleEdit = () => isEditing.value = !isEditing.value
const emit = defineEmits(['submit']);

const form = useForm({
    validationSchema: toTypedSchema(z.object({ notes: z.string() }))
})

const internalNotes = ref();

const onSubmit = form.handleSubmit(({ notes }) => {
    model.value = notes
    emit('submit', notes)
    toggleEdit();
})
</script>

<template>
    <div class=" grid grid-cols-12">
        <p v-if="!isEditing" class="text-lightning-yellow-700 font-medium col-span-4">{{ model }}</p>
        <form v-else @submit="onSubmit"
            class="col-span-12 md-col-span-4 w-full flex flex-col md:flex-row gap-4 align-top items-center md:items-start ">
            <div class="w-full md:w-auto">
                <FormField v-slot="{ componentField }" :value="internalNotes" name="notes">
                    <FormControl>
                        <Input type="text" v-bind="componentField" />
                        <FormMessage />
                    </FormControl>
                </FormField>
            </div>

            <Button type="submit" class=" bg-scooter-400 hover:bg-scooter-600 text-white w-44 ">Save
                changes</Button>
        </form>
        <Button variant="ghost" class="px-0 w-10 col-span-1 col-start-13 rounded-md" @click="toggleEdit">
            <img src="/edit-filled.svg">
        </Button>
    </div>
</template>