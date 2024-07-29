import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username:string=""

  handelSbmitForm(login:any){
    console.log(login);
    console.log(login.value);
    if(login.valid){
      //submit to api
    }


  }

}
