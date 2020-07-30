import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AddressServiceService } from '../services/address-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  public address = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    province: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.required]),
  });

  get fullName(): any {
    return this.address['fullName'];
  }

  constructor(public addressService: AddressServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.address.invalid) {
      return;
    }
    this.addressService.setAddress(this.address.value)
    this.router.navigateByUrl('/checkout');
  }

}
