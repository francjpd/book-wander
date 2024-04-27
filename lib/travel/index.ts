import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const travelSchema = toTypedSchema(z.object({
    continent: z.enum(['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia', 'Antartica']),
    departure: z.coerce.date(),
    description: z.string(),
    name: z.string(),
    picture: z.string(),
    price: z.number(),
    rating: z.coerce.number({ message: 'Rating has to be from 1 up to 5' }).gt(0).lte(5),
    returnDate: z.coerce.date(),
}));

export const newTravel = () => ({
    continent: 'Europe',
    description: '',
    name: '',
    picture: '',
    price: 0,
    returnDate: new Date(),
    departure: new Date(),
    rating: 0
})

