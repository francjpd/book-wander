import type { Booking } from '~/types/booking'

export const useBookingState = () => useState<Booking>('booking')
