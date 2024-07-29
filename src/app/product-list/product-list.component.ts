import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:any=[]

  constructor(private ProductService :ProductService){}
ngOnInit(){
  this.ProductService.getProductList().subscribe((res)=>
    this.products=res.products

  )
}

  handelReciveData(id:string) {
// this.products = this.products.filter(game=>game.id !== id)
  }

}
