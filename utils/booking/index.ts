import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import type { Booking } from '~/types/booking'

const API = '/api/booking/'

export const refreshBooking = async (id?: string) => {
  try {
    if (id) return await $fetch<Booking>(`${API}${id}`)
    return await $fetch<Booking[]>(`${API}`)
  }
  catch (error) {
    createError({ statusCode: 404, statusMessage: 'Id not found' })
  }
}

export const bookingSchema = toTypedSchema(z.object({
  paymentType: z.enum(['Credit', 'Transfer', 'Paypal', 'Revolut']),
  notes: z.string(),
}))
