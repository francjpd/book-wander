import jsonFile from './travels.json' assert { type: 'json' }
import type { Travel } from '~/types/travel'

export const travels: Travel[] = jsonFile as unknown as Travel[]
