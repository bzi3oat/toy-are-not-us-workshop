import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductServiceService } from '../services/product-service.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ShoppingServiceService } from '../services/shopping-service.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: Product = new Product
  constructor(public service: ProductServiceService, private router: Router, private route: ActivatedRoute, public shop: ShoppingServiceService) {

  }

  onAddtoCart() {
    this.shop.addItem(this.productDetail)
    console.log(this.shop.getItems());
    this.router.navigateByUrl(`/cart`);
  }

  array(n: number): any[] {
    return Array(n);
  }


  ngOnInit(): void {
    const productId: number = parseInt(this.route.snapshot.paramMap.get("id"))
    this.service.getSpecificProduct(productId).subscribe(p => {
      this.productDetail = p
      this.productDetail.amount = 1
      console.log(this.productDetail)
    })

  }



}
