import { travels } from '~/server/stubs/travels'

export default eventHandler(async (event) => {
  const id = event?.context?.params?.id
  const body = await readBody(event)

  if (!id) return 'not id provided'

  const index = travels.findIndex(travel => travel.id === id)

  if (index === -1) return 'Destination not found'
  travels[index] = { ...travels[index], ...body }
  return 'Destination updated successfully'
})
