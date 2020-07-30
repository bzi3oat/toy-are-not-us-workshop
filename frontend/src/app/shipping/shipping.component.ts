import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  address = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

}
