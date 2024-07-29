import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports:[NgFor,FormsModule]
})
export class CartComponent implements OnInit {
  counter = 0;
  id?: string;
  productDetail: any;
  cartItems: any[] = [];
  carts: any[] = [];
  constructor(private CounterService: CounterService) {}


  ngOnInit() {
    this.CounterService.getCartArray().subscribe((data) => {
      this.carts = data;
      console.log(this.carts)

    });
  }

  increaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.id === id);
    if (cartItem && cartItem.quantity < cartItem.stock) {
      cartItem.quantity += 1;
      this.CounterService.setCartArray(this.carts);
    }
  }

  decreaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.id === id);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity -= 1;
      this.CounterService.setCartArray(this.carts);
    }
  }

  removeItem(id: any) {
    this.carts = this.carts.filter((c) => c.id !== id);
    this.CounterService.setCartArray(this.carts);
  }

  getTotalPrice() {
    const total = this.carts.reduce(
      (total, cart) => total + cart.price * cart.quantity,
      0
    );
    return Math.round(total * 100) / 100;
  }


}
