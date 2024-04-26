<script setup lang="ts">
import { useForwardPropsEmits, type SelectRootProps, type SelectRootEmits } from 'radix-vue';

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <Select v-bind="forwarded">
        <SelectTrigger>
            <SelectValue placeholder="Select a continent" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Continents</SelectLabel>
                <SelectItem value="Asia">
                    Asia
                </SelectItem>
                <SelectItem value="Africa">
                    Africa
                </SelectItem>
                <SelectItem value="Europe">
                    Europe
                </SelectItem>
                <SelectItem value="North America">
                    North America
                </SelectItem>
                <SelectItem value="South America">
                    South America
                </SelectItem>
                <SelectItem value="Austraila">
                    Austraila
                </SelectItem>
                <SelectItem value="Antartica">
                    Antartica
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>