import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

{
  path: '',
  component:ProductListComponent ,
  title: 'product-list',
},
{
  path: 'register',
  component: RegisterComponent,
  title: 'register',
},
{
  path: 'product-details/:id',
  component: ProductDetailsComponent,
  title: 'product-details',
},
{
  path: 'login',
  component:LoginComponent ,
  title: 'login',
},

{
  path: 'cart',
  component:CartComponent ,
  title: 'cart',
},

{
  path: '**',
  component:NotFoundComponent ,
  title: 'not-foundCompenent',
},


];
