import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter:any=0
  totalCartItems=0;
  constructor(private CounterService :CounterService){}
  ngOnInit(){
    this.CounterService.getCartArray().subscribe((res)=>{this.counter=res
      console.log(res);
      console.log(this.counter);
      this.CounterService.cartCounter$.subscribe(count => {
        this.totalCartItems = count;
      });

    })





  }

}
