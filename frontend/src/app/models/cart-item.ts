import { Product } from './product';

export class CartItem {
    public products: Product[];
    public totalPrice: number;
    public shipping: string;
    public shippingFee: number;
}
