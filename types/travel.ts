export type Travel = {
    continent: 'Asia' | 'Africa' | 'Europe' | 'North America' | 'South America' | 'Australia' | 'Antartica'
    departure: Date;
    description: string;
    id: string;
    name: string;
    picture: string;
    price: number;
    rating?: number;
    returnDate: Date;
}