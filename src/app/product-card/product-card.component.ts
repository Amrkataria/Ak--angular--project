import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink,NgFor,NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product:any;
  stars = [1, 2, 3, 4, 5];
  roundedRating:number=0

  ngOnInit(){
    this.roundedRating = Math.round(this.product.rating);

  }

}
