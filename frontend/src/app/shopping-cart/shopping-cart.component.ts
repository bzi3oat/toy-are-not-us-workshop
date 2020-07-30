import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productCart = new CartItem
  total: number = 0
  constructor(private api: ProductServiceService, private router: Router) {
    api.getAllProduct().subscribe((i: Product[]) => {
      this.productCart.products = i
      i.forEach(p => {
        p.amount = p.quantity
        this.total += p.price * p.amount
      });
    })
  }
  array(n: number): any[] {
    return Array(n);
  }
  ngOnInit(): void {
  }
  updatePrice() {
    this.total = 0
    this.productCart.products.forEach(p => {
      this.total += p.price * p.amount
    });
  }
  onDelete(id: number) {
    this.productCart.products = this.productCart.products.filter(product => product.id !== id)
    this.updatePrice()
  }
  onSubmit() {
    this.updatePrice()
    this.router.navigateByUrl('/shipping');
  }
}
