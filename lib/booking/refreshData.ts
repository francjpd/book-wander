import type { Booking } from "~/types/booking";

const API = '/api/booking/';
export const refreshData = async (id?: string) => {
    if (id) return await useFetch<Booking>(`${API}${id}`)
    return await useFetch<Booking>(`${API}`)
}
