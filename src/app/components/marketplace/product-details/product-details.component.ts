import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  product: Product | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.product = this.productService.getProductById(params['id']);
    });
  }

}