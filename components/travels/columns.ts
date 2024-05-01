import { h } from 'vue'
import type { Travel } from '~/types/travel'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTableDestiny from './DataTableDestiny.vue'
import DataTableDate from './DataTableDate.vue'
import DataTableImage from './DataTableImage.vue'
import DataTableRating from './DataTableRating.vue'
import DataTableCurrency from './DataTableCurrency.vue'

export const columns: ColumnDef<Travel>[] = [
    {
        accessorKey: 'DEPARTURE',
        header: () => h('div', { class: 'text-center text-uppercase w-[30px] sm:w-auto' }, ''),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableDate, {
                class: 'w-[32px] sm:w-auto',
                travel
            })
        },
    },
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'w-28' }, 'DESTINY'),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableDestiny, {
                travel,
                class: 'w-28 md:w-40'
            })
        },
    },
    {
        accessorKey: 'picture',
        header: () => h('div', { class: 'w-20 sm:w-32 md:w-auto' }, ''),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableImage, {
                class: 'w-24 sm:w-32 md:w-auto',
                travel
            })
        },
    },
    {
        accessorKey: 'description',
        header: () => h('div', { class: 'w-0 h-0 md:w-auto md:h-auto md:w-max-[20rem] invisible md:visible' }, 'ABOUT'),
        cell: ({ row }) => {
            return h('div', { class: 'w-0 h-0 md:w-auto md:h-auto md:w-max-[20rem] text-gray-800 text-justify invisible md:visible' }, `${row.getValue('description')}`)
        },
    },
    {
        accessorKey: 'price',
        header: () => h('div', { class: 'w-14' }, 'PRICE'),
        cell: ({ row }) => h(DataTableCurrency, { amount: row.original.price })
    },
    {
        accessorKey: 'rating',
        header: () => h('div', { class: 'invisible md:visible  w-4 sm:w-auto' }, 'RATING'),
        cell: ({ row }) => h(DataTableRating, { class: 'w-4', rating: Number(row.getValue('rating')) })
    }

]