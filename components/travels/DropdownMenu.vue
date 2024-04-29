<script setup lang="ts">
import type { Travel } from '~/types/travel';

const emit = defineEmits(['edit', 'delete', 'bookit'])
const props = defineProps<{
    travel?: Travel

}>()

const open = ref<boolean>(false)
</script>
<template>
    <div>
        <DropdownMenu v-model:open="open">
            <DropdownMenuTrigger as-child>
                <Button class="p4 rounded-md tracking-widest font-extrabold text-4x1">
                    ...
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-[140px]">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <div class="inline-flex w-full">
                            <Button variant="ghost" @click="() => emit('bookit', props.travel?.id)">
                                <img src="/bookit.svg" class="mr-2" alt="remove travel" />
                                <p>Book it!</p>
                            </Button>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div class="inline-flex w-full">
                            <Button variant="ghost" @click="() => emit('edit', props.travel?.id)">
                                <img src="/edit.svg" class="mr-2" alt="edit travel" />
                                <p>edit</p>
                            </Button>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <div class="inline-flex w-full">
                            <Button variant="ghost" @click="() => emit('delete', props.travel?.id)">
                                <img src="/trash.svg" class="mr-2" alt="remove travel" />
                                <p>delete</p>
                            </Button>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>