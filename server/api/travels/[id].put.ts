import { travels } from '~/server/stubs/travels'

export default eventHandler(async (event) => {
  const id = event?.context?.params?.id
  const body = await readBody(event)

  if (!id) return 'not id provided'

  const index = travels.findIndex(travel => travel.id === id)

  const returnDateStr = body.returnDate.split('/')
  const departureDateStr = body.departure.split('/')

  if (index === -1) return 'Destination not found'
  travels[index] = {
    ...travels[index],
    ...body,
    departure: new Date(departureDateStr[2], departureDateStr[1] - 1, departureDateStr[0]),
    returnDate: new Date(returnDateStr[2], returnDateStr[1] - 1, returnDateStr[0]),
  }
  return 'Destination updated successfully'
})
