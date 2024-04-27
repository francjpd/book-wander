<script setup lang="ts">
import { useForwardPropsEmits, type SelectRootProps, type SelectRootEmits } from 'radix-vue';

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia', 'Antartica']
</script>

<template>
    <Select v-bind="forwarded">
        <SelectTrigger>
            <SelectValue placeholder="Select a continent" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <template v-for="continent in continents">
                    <SelectItem :value="continent">
                        {{ continent }}
                    </SelectItem>
                </template>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>