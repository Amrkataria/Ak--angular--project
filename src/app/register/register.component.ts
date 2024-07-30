import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register:FormGroup

  constructor(){
    this.register=new FormGroup({

name:new FormControl("",[Validators.required]),
username:new FormControl("",[Validators.required, Validators.pattern(/^\S+$/)]),
email:new FormControl("",[Validators.required,Validators.email]),
password:new FormControl("",[Validators.required, Validators.minLength(8),
  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/)]),

repassword:new FormControl("",Validators.required)},{ validators: this.passwordMatchValidator

})
}

  get name(){
    return this.register.get("name")
  }
  get username(){
    return this.register.get("username")
  }
  get email(){
    return this.register.get("email")
  }
  get password(){
    return this.register.get("password")
  }
  get repassword(){
    return this.register.get("repassword")
  }
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('repassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }



  handelsubmitform(){
    console.log(this.register)

  }

}



