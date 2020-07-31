import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressServiceService } from '../services/address-service.service';
import { Address } from '../models/address';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';



@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  address: Address;
  product: Product;
  cartItem: CartItem;

  constructor(public service: AddressServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
