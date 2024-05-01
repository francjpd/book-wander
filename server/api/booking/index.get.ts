import { booking } from '~/server/stubs/bookings'

export default eventHandler(async () => {
  // await new Promise<void>(resolve => setTimeout(resolve, 2000));
  return booking
})
