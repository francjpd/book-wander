import { booking } from "~/server/stubs/bookings"

export default eventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    console.log('here')

    // await new Promise<void>(resolve => setTimeout(resolve, 2000));

    const result = booking.find(booking => booking.id === id)
    if (!result) throw createError({ statusCode: 404, statusMessage: 'Id not found' })

    return result
})
