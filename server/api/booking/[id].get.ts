import { booking } from "~/server/stubs/bookings"

export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    // await new Promise<void>(resolve => setTimeout(resolve, 2000));

    const result = booking.find(booking => booking.id === id)

    return result
})
