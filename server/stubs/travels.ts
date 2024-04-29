import { Travel } from '~/types/travel';
import jsonFile from './travels.json' assert { type: 'json' };
export const travels: Travel[] = jsonFile as unknown as Travel[]