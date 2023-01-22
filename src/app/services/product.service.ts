import { Injectable } from '@angular/core';
import mockProductData from '../mock-data/product-data';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products = mockProductData;
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.filter(product => product.id.toString() === id.toString())[0]; 
   }
}
