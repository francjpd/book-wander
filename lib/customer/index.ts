import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import type { Customer } from "~/types/customer";


const phoneRexep = /^[(]?[+]?\d{2,3}[)]?[-\s.]?\d{3}[-\s.]?\d{4,6}$/;



export const customerSchema = toTypedSchema(z.object({
    age: z.number().gte(14, { message: 'Age has to be over 14 years old' }).lte(100, { message: 'Age has to be less than 100 years!' }),
    email: z.string().email(),
    phone: z.string().regex(phoneRexep, { message:'Valid format: (+123)456-372166' }),
    name: z.string()
}));


export const newCustomer: () => Customer = () => ({
    age: 0,
    email: '',
    gender: 'Other',
    name: '',
    phone: '',
    id: '',
})

