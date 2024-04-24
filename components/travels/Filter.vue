<script setup lang="ts">
import { ref } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,

} from '@/components/ui/command'
import type {
    AcceptableValue,
    SelectEvent
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import type { ComboboxItemEmits } from 'radix-vue'


const props = withDefaults(
    defineProps<{
        placeholder?: string,
        value: string,
        items: { value: any, label: string }[]
    }>(), { placeholder: 'Select items...' })

const emits = defineEmits(['select'])

const handleSelect = (ev: SelectEvent<AcceptableValue>) => {
    if (typeof ev.detail.value === 'string') {
        value.value = ev.detail.value
    }
    open.value = false
    emits('select', value.value);
}

const open = ref(false)
const value = ref(props.value)
</script>

<template>
    <div v-bind="$attrs">
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between">
                    {{ value
        ? props.items.find((item) => item.value === value)?.label
        : props.placeholder }}
                    <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
                <Command>
                    <CommandEmpty>No item found.</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            <CommandItem v-for="item in props.items" :key="item.value" :value="item.value"
                                @select="handleSelect">
                                {{ item.label }}
                                <Check :class="cn(
        'ml-auto h-4 w-4',
        value === item.value ? 'opacity-100' : 'opacity-0',
    )" />
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    </div>
</template>