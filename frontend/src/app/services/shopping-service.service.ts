import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  currentCartItems: CartItem = new CartItem();

  constructor() { this.currentCartItems.products = [] }

  getItems(): Observable<CartItem> {
    return of(this.currentCartItems)
  }
  addItem(product: Product) {
    this.currentCartItems.products.push(product);
  }
  removeItem(id: number) {
    this.currentCartItems.products = this.currentCartItems.products.filter(item => { item.id != id });
  }

  addShipping(shipping: string, shippingFee: number, totalPrice: number) {
    this.currentCartItems.shipping = shipping
    this.currentCartItems.shippingFee = shippingFee;
    this.currentCartItems.totalPrice = totalPrice
  }
}
