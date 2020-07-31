import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressServiceService } from '../services/address-service.service';
import { Address } from '../models/address';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { ShoppingServiceService } from '../services/shopping-service.service';
import { ProductServiceService } from '../services/product-service.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';



@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  productCart = new CartItem();
  address: Address;
  pipe = new DatePipe('en-US');
  pipe2 = new DecimalPipe('en-Us')
  orderId = '';
  totalAmount = 0;
  totalPrice = 0;
  constructor(public service: AddressServiceService, private route: ActivatedRoute,
    private store: ShoppingServiceService, private mockSer: ProductServiceService) {
    store.getItems().subscribe(i => {
      this.productCart = i
      this.productCart.products.forEach(item => {
        this.totalAmount += item.amount
        this.totalPrice += (item.price * 31.5) * item.amount
      })
    })
    this.address = service.getAddress()
  }
  ngOnInit(): void {
    this.generateCode()
  }
  generateCode() {
    const now = Date.now();
    const nowStr = this.pipe.transform(now, 'yyyyMMdd')
    const num = Math.floor(Math.random() * 1000);
    const numStr = this.pipe2.transform(num, '3.')
    const code = nowStr + numStr
    this.orderId = code;
  }
}
