import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  quantity = 1;
  itemsInCartCount = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
