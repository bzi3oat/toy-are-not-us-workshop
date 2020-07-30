export class Product {
    public name: string;
    public price: number;
    public quantity: number;
    public id: number;
    public availbility: string;
    public age: string;
    public gender: string;
    public brand: string;
}

export const exampleProduct: Product[] = [
    { id: 2, name: '43 Piece dinner Set',
    gender: 'Female', age: '3-5', price: 12.95,
    availbility: 'InStock', brand: 'CoolKidz', quantity: 20 },
    { id: 16, name: 'Scrabble', gender: 'Neutral', 
    age: 'over8', price: 19.95, availbility: 'InStock', 
    brand: 'GeekToys', quantity: 20 },
    { id: 13, name: 'Settlers of Catan Board Game',
    gender: 'Neutral', age: 'over8', price: 44.95,
    availbility: 'InStock', brand: 'GeekToys', quantity: 20 }
]
