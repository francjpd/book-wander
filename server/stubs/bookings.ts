import { travels } from './travels'
import type { Booking } from '~/types/booking'

export const booking: Booking[] = [{
  customer: {
    age: 34,
    email: 'jane.smith@example.com',
    gender: 'Female',
    id: 'cust-002',
    name: 'Jane Smith',
    phone: '987-654-3210',
  },
  id: 'book-002',
  status: 'created',
  notes: 'Requires special meal',
  paymentType: 'Paypal',
  travel: travels[0],
},
{
  customer: {
    age: 45,
    email: 'emily.jones@example.com',
    gender: 'Non Binary',
    id: 'cust-003',
    name: 'Alex Johnson',
    phone: '456-123-7890',
  },
  id: 'book-003',
  status: 'created',
  notes: 'Allergic to peanuts',
  paymentType: 'Transfer',
  travel: travels[1],
},
{
  customer: {
    age: 38,
    email: 'michael.brown@example.com',
    gender: 'Male',
    id: 'cust-004',
    name: 'Michael Brown',
    phone: '321-654-0987',
  },
  id: 'book-004',
  status: 'created',
  notes: 'Wheelchair accessible room required',
  paymentType: 'Revolut',
  travel: travels[2],
},
{
  customer: {
    age: 29,
    email: 'lucas.white@example.com',
    gender: 'Other',
    id: 'cust-005',
    name: 'Lucas White',
    phone: '159-753-4862',
  },
  id: 'book-005',
  status: 'created',
  notes: 'Interested in local cultural events',
  paymentType: 'Credit',
  travel: travels[3],
},
]
