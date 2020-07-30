import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, exampleProduct } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getAllProduct(): Observable<Product[]> {
    return of(exampleProduct)
  }
  getSpecificProduct(id: number): Observable<Product> {
    return of(exampleProduct.filter(p => p.id === id)[0])
  }
}
