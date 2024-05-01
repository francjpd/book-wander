import { travels } from '~/server/stubs/travels'

export default eventHandler(async (event) => {
  const id = event?.context?.params?.id
  if (!id) return 'not id provided'

  const index = travels.findIndex(travel => travel.id === id)

  if (index === -1) return 'Destination not found'

  travels.splice(index, 1)
  return 'Destination deleted successfully'
})
