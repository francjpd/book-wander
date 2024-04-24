import type { Customer } from "./customer";

export type booking = {
    customer?: Customer;
    customerId: string;
    id: string;
    notes: string
    paymentType: 'Credit' | 'Transfer' | 'Paypal' | 'Revolut';
    travelId: string;
}