import { Component, OnInit } from '@angular/core';
import { ShoppingServiceService } from '../services/shopping-service.service'
import { CartItem } from '../models/cart-item'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItem: CartItem
  paymentOption: string;
  bankOption: string;

  constructor(private shop: ShoppingServiceService,) { }

  ngOnInit(): void {
    this.shop.getItems().subscribe(i => {
      this.cartItem = i
    });
  }

  onRadioCheck(e) {
    console.log(e.target.id)
    this.paymentOption = e.target.id
  }
  onBankRadioCheck(e) {
    console.log(e.target.id)
    this.bankOption = e.target.id
  }

}
