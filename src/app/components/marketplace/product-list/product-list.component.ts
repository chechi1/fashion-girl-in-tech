import { ProductApiService } from './../../../services/networkcalls/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(
    private productApiService: ProductApiService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productApiService.getProducts().subscribe((response: any)=>{
      this.products = response.products;
      //console.log(response.products);
    
    })
  }

}
