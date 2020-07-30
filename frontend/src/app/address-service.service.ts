import { Injectable } from '@angular/core';
import { Address } from './models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {
  address: Address;

  constructor() { }

  setAddress(address: Address) {
    this.address = address;
  }

  getAddress(): Address {
    return this.address;
  }

}
