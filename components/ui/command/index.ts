export { default as Command } from './Command.vue'
export { default as CommandDialog } from './CommandDialog.vue'
export { default as CommandEmpty } from './CommandEmpty.vue'
export { default as CommandGroup } from './CommandGroup.vue'
export { default as CommandInput } from './CommandInput.vue'
export { default as CommandItem } from './CommandItem.vue'
export { default as CommandList } from './CommandList.vue'
export { default as CommandSeparator } from './CommandSeparator.vue'
export { default as CommandShortcut } from './CommandShortcut.vue'
export type SelectEvent<T> = CustomEvent<{
  originalEvent: PointerEvent
  value?: T
}>

export type AcceptableValue = string | number | boolean | Record<string, any>
