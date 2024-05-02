import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import type { Travel } from '~/types/travel'

const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/

export const travelSchema = toTypedSchema(z.object({
  continent: z.enum(['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia', 'Antartica']),
  departure: z.string().regex(dateRegex, { message: 'Format has to be dd/MM/yyyy' }),
  description: z.string(),
  name: z.string(),
  picture: z.string(),
  price: z.number(),
  rating: z.coerce.number().gt(0).lte(5, 'Rating has to be from 1 up to 5'),
  returnDate: z.string().regex(dateRegex, { message: 'Format has to be dd/MM/yyyy' }),
}))

export const newTravel = () => ({
  continent: 'Europe',
  description: '',
  name: '',
  picture: '',
  price: 0,
  returnDate: new Date(),
  departure: new Date(),
  rating: 0,
})

const API = '/api/travels'

export const useGetTravels = (continent: Ref<string>, search: Ref<string>) => async (ssr: boolean = false) => {
  const params = new URLSearchParams()

  if (continent.value.length) {
    params.append('continent', continent.value)
  }

  if (search.value.length) {
    params.append('search', search.value)
  }

  const api = `${API}${params.toString() ? `?${params}` : ''}`

  if (ssr) {
    const { data } = await useFetch<Travel[]>(api);
    return data.value || []
  }
  return await $fetch<Travel[]>(api) || []
}