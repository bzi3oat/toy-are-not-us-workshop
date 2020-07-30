import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  ageOption: string="any";
  genderOption: string="any";
  products: Product[] = [];
  constructor(private router: Router, private service: ProductServiceService) { }

  ngOnInit(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }

  searchProduct(age, gender){
    if (age == "any" && gender == "any"){
      this.service.getAllProduct().subscribe((products) => {
        return (this.products = products);
      });
    }
    else if (age == "any"){
      this.service.getAllProduct().subscribe((products) => {
        return (this.products = products.filter((p) =>{return p.gender==gender;}));
      });}
    else if (gender =="any"){
      this.service.getAllProduct().subscribe((products) => {
        return (this.products = products.filter((p) =>{return p.age == age}));
      });}
    else {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products.filter((p) =>{return p.age == age && p.gender==gender;}));
    });}
  }


}
