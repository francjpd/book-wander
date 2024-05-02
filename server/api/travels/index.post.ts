import { travels } from '~/server/stubs/travels'

const randomNumber = () => Math.floor(Math.random() * (9 - 0 + 1)) + 0
export default eventHandler(async (event) => {
  const body = await readBody(event)

  let id = ''
  for (let i = 0; i < 6; i++) {
    id += randomNumber().toString()
  }
  const returnDateStr = body.returnDate.split('/')
  const departureStr = body.departure.split('/');
  travels.push({
    ...body,
    departure: new Date(departureStr[2], departureStr[1] - 1, departureStr[0]),
    returnDate: new Date(returnDateStr[2], returnDateStr[1] - 1, returnDateStr[0]),
    rating: 0,
    id,
  })

  return { travels }
})
