import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  currentCartItems: CartItem[] = [];

  constructor() { }

  getItems(): Observable<CartItem[]> {
    return of(this.currentCartItems);
  }
  addItem(product: CartItem) {
    this.currentCartItems.push(product);
  }
  removeItem(id: number) {
    this.currentCartItems = this.currentCartItems.filter(item => { item.products.filter(i => i.id !== id); });
  }
}
