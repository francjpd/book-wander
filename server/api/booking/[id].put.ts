import { booking } from "~/server/stubs/bookings"

export default eventHandler(async (event) => {
    const id = event?.context?.params?.id;
    const { type, travel, customer, booking: BookingToModify } = await readBody(event)
    if (!id) return 'Not id provided';

    const index = booking.findIndex(booking => booking.id === id);

    switch (type) {
        case 'travel': {
            booking[index] = { ...booking[index], travel }
            break;
        }
        case 'customer': {
            booking[index] = { ...booking[index], customer }
            break;
        }
        case 'booking': {
            booking[index] = { ...booking[index], notes: BookingToModify.notes }
            break;
        }
        case 'paymentAndNotes': {
            console.log(booking[index])
            console.log(BookingToModify)
            console.log({ ...booking[index], paymentType: BookingToModify.paymentType, notes: BookingToModify.note, status: 'created' })
            booking[index] = { ...booking[index], paymentType: BookingToModify.paymentType, notes: BookingToModify.note, status: 'created' }
            break;
        }
    }
    if (index === -1) return 'Destination not found'
    return 'Destination updated successfully'

})