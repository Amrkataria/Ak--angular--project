import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgClass, NgFor,NgIf],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: any;
  id?: string;
  roundedRating: number = 0;
  selectedImage: string = "";
  index: number = 0;
  quantity: number = 1;
  stars = [1, 2, 3, 4, 5];
  cartArray: any[] = [];
  quantities: { [id: number]: number } = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private CounterService: CounterService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.CounterService.getCartArray().subscribe((cart) => {
      this.cartArray = cart;


    });
    this.CounterService.getCartArray().subscribe((cart) => {
      this.cartArray = cart;
    });

    if (this.id) {
      this.productService.getProductdetails(this.id).subscribe({
        next: (res) => {

          this.productDetail = res;
          this.roundedRating = Math.round(this.productDetail.rating);
          this.selectedImage = this.productDetail.images[this.index] || '';
          this.index++;
             this.quantities[this. productDetail.id] = 1;
        },
        error: (err) => {
          console.error('Failed to fetch product details:', err);
        }
      });
    } else {
      console.error('No product ID provided');
    }
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  decreaseQuantity(productId: number) {
    if (this.quantities[productId] > 1) {
      this.quantities[productId]--;
      console.log(this.quantities);
    }
  }

  increaseQuantity(productId: number) {
    if (this.quantities[productId] < this.productDetail?.stock) {
      this.quantities[productId]++;
      console.log(this.quantities);

    }
  }

  addToCart(productId: number) {
    const quantity = this.quantities[this.productDetail.id];
    this.productDetail.quantity = quantity;

    const productInCart = this.cartArray.find(
      (item: any) => item.id === this.productDetail.id
    );

    if (quantity > 0) {
      if (productInCart) {
        productInCart.quantity += quantity;
      } else {
        this.cartArray.push({ ...this.productDetail });
      }
      this.CounterService.setCartArray(this.cartArray);
    }

  }

  buyNow() {
    this.CounterService.getCartArray().subscribe((cart) => console.log(cart));
  }
}
