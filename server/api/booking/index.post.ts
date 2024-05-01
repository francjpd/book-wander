import { newTravel } from '~/utils/travel'
import { booking } from '~/server/stubs/bookings'
import type { Booking } from '~/types/booking'

const randomNumber = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0
export default eventHandler(async (event) => {
  const body = await readBody(event)

  let id = ''
  for (let i = 0; i < 6; i++) {
    id += randomNumber().toString()
  }

  const newBooking: Booking = {
    id,
    status: 'new',
    notes: '',
    paymentType: 'Credit',
    travel: body ? { ...body } : newTravel(),
  }

  booking.push(newBooking)

  return newBooking
})
