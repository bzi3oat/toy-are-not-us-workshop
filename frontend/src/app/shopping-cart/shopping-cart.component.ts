import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ShoppingServiceService } from '../services/shopping-service.service'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productCart = new CartItem
  total: number = 0
  constructor(private api: ProductServiceService, private router: Router, private store: ShoppingServiceService) {
    store.getItems().subscribe(i => {
      this.productCart = i
      i.products.forEach(p => {
        this.total += p.price * p.amount
      });
    });
  }
  array(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
  }
  updatePrice(): void {
    this.total = 0
    this.store.getItems().subscribe(i => {
      i.products.forEach(p => {
        this.total += p.price * p.amount
      });
    })
  }
  onDelete(id: number): void {
    this.store.removeItem(id)
    this.updatePrice()
  }
  onSubmit(): void {
    this.updatePrice()
    this.router.navigateByUrl('/shipping');
  }
}
