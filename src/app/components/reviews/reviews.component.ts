import { Component, OnInit } from '@angular/core';
import getReviewData from 'src/app/mock-data/review-data';
import Review from 'src/app/models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reviews = getReviewData;
  }

  setClasses(index: number) {
    let classes = {
      'carousel-item active': index === 0,
      'carousel-item': index > 0
    };
    return classes;
  }

  
  
  

}
