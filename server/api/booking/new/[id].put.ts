import { booking } from "~/server/stubs/bookings"

export default eventHandler(async (event) => {
    const id = event?.context?.params?.id;
    const { type, travel, customer } = await readBody(event)
    if (!id) return 'Not id provided';

    const index = booking.findIndex(booking => booking.id === id);

    switch (type) {
        case 'travel': {
            booking[index] = { ...booking[index], travel }
            break;
        }
        case 'customer': {
            booking[index] = { ...booking[index], customer, status: 'created' }
            break;
        }
    }

    if (index === -1) return 'Destination not found'
    return 'Destination updated successfully'

})