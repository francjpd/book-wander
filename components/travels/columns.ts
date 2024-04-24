import { h } from 'vue'
import type { Travel } from '~/types/travel'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTableDestiny from './DataTableDestiny.vue'
import DataTableDate from './DataTableDate.vue'
import Button from '../ui/button/Button.vue'
import DataTableImage from './DataTableImage.vue'


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
    // {
    //     accessorKey: 'picture',
    //     header: () => '',
    //     cell: ({ row }) => {
    //         const travel = row.original
    //         return h(DataTableImage, {
    //             travel
    //         })
    //     },
    // },
    {
        accessorKey: 'price',
        header: () => 'PRICE',
        cell: ({ row }) => {
            return h('div', { class: 'text-gray-800' }, `${row.getValue('price')} eur`)
        },
    },

    {
        header: () => '',
        accessorKey: 'details',
        cell: ({ row }) => {
            return h(Button, { class: "bg-fuzzy-wuzzy-brown-600 hover:bg-fuzzy-wuzzy-brown-800 cursor-pointer text-white" }, 'More details')
        },
    },

]