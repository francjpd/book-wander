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
        header: () => h('div', { class: 'text-center' }, 'DEPARTURE'),
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableDate, {
                travel
            })
        },
    },
    {
        accessorKey: 'name',
        header: () => 'DESTINY',
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableDestiny, {
                travel
            })
        },
    },
    {
        accessorKey: 'picture',
        header: () => '',
        cell: ({ row }) => {
            const travel = row.original
            return h(DataTableImage, {
                travel
            })
        },
    },
    {
        accessorKey: 'price',
        header: () => 'PRICE',
        cell: ({ row }) => {
            return h('div', { class: 'text-gray-800' }, `${row.getValue('price')} eur`)
        },
    },
    {
        accessorKey: 'rating',
        header: () => 'RATING',
        cell: ({ row }) => h(DataTableRating, { rating: Number(row.getValue('rating')) })
    }

]