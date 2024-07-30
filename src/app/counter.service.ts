import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private cartArray = new BehaviorSubject<any[]>([]);
  private cartCounter = new BehaviorSubject<number>(0);


  cartCounter$ = this.cartCounter.asObservable();

  constructor() { }

  getCartArray() {
    console.log(this.cartArray)
    return this.cartArray.asObservable();
  }

  setCartArray(newArray: any[]) {
    this.cartArray.next(newArray);
    this.updateCartCounter(newArray);
  }

  private updateCartCounter(cart: any[]) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCounter.next(totalItems);
  }

}






