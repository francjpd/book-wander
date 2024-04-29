import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import type { Customer } from "~/types/customer";

export const customerSchema = toTypedSchema(z.object({
    age: z.number(),
    email: z.string(),
    phone: z.string(),
    name: z.string()
}));


export const newCustomer: () => Customer = () => ({
    age: 18,
    email: '',
    gender: 'Other',
    name: '',
    phone: '',
    id: '',
})

