import { h } from 'vue'
import type { Travel } from '~/types/travel'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTableDestiny from './DataTableDestiny.vue'
import DataTableDate from './DataTableDate.vue'
import DataTableImage from './DataTableImage.vue'
import DataTableRating from './DataTableRating.vue'

export const columns: ColumnDef<Travel>[] = [
    {
        accessorKey: 'DEPARTURE',
        header: () => h('div', { class: 'text-center text-uppercase w-12 sm:w-auto' }, 'DATE'),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableDate, {
                class: 'sm:w-auto',
                travel
            })
        },
    },
    {
        accessorKey: 'name',
        header: () => h('div', { class: 'w-14 sm:w-auto sm:h-auto' }, 'DESTINY'),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableDestiny, {
                travel,
                class: 'w-24     md:w-auto'
            })
        },
    },
    {
        accessorKey: 'picture',
        header: () => h('div', { class: 'p-0 m-0 invisible md:visible  w-0 h-0  sm:w-auto sm:h-auto' }, ''),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableImage, {
                class: 'invisible w-0 md:visible  sm:w-auto',
                travel
            })
        },
    },
    {
        accessorKey: 'description',
        header: () => h('div', { class: 'w-0 h-0 md:h-auto md:w-[28rem] invisible md:visible' }, 'ABOUT'),
        cell: ({ row }) => {
            return h('div', { class: 'w-0 h-0 md:h-auto md:w-[28rem] text-gray-800 invisible md:visible' }, `${row.getValue('description')}`)
        },
    },
    {
        accessorKey: 'price',
        header: () => h('div', { class: 'sm:w-4 sm:w-auto' }, 'PRICE'),
        cell: ({ row }) => {
            return h('div', { class: 'text-gray-800 w-4 text-center' }, `${row.getValue('price')} eur`)
        },
    },
    {
        accessorKey: 'rating',
        header: () => h('div', { class: 'invisible md:visible  w-4 sm:w-auto' }, 'RATING'),
        cell: ({ row }) => h(DataTableRating, { class: 'w-4', rating: Number(row.getValue('rating')) })
    }

]