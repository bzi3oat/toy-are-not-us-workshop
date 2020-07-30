import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://toy-r-not-us-group-6.herokuapp.com/api/product'
    );
  }

  getSpecificProduct(id: number): Observable<Product> {
    return this.http.get<Product>(
      `https://toy-r-not-us-group-6.herokuapp.com/api/product/${id}`
    );
  }
}
