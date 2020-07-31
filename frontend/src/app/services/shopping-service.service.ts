import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  currentCartItems: CartItem = new CartItem();

  constructor() { this.currentCartItems.products = []; }

  getItems(): Observable<CartItem> {
    return of(this.currentCartItems);
  }
  addItem(product: Product) {
    const index = this.currentCartItems.products.filter(i => i.id === product.id).length;

    if (index > 0) {
      this.currentCartItems.products.filter(f => {
        if (f.id === product.id) {
          f.amount += product.amount;
        }
      });
    } else {
      this.currentCartItems.products.push(product);
    }
    console.log(this.currentCartItems.products);


  }
  removeItem(id: number) {
    this.currentCartItems.products = this.currentCartItems.products.filter(item => item.id !== id);
  }

  addShipping(shipping: string, shippingFee: number, totalPrice: number) {
    this.currentCartItems.shipping = shipping;
    this.currentCartItems.shippingFee = shippingFee;
    this.currentCartItems.totalPrice = totalPrice;
  }
  addTotal(price: number) {
    this.currentCartItems.totalPrice = price;
  }
}
