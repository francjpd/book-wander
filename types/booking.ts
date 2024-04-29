import type { Customer } from "./customer";
import type { Travel } from "./travel";

export type Booking = {
    customer?: Customer;
    id: string;
    notes: string
    paymentType: 'Credit' | 'Transfer' | 'Paypal' | 'Revolut';
    travel: Travel;
    status: 'new' | 'created'
}