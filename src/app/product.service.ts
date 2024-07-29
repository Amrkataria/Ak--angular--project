import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Http:HttpClient) { }

getProductList(){
  return this.Http.get<any>("https://dummyjson.com/products")
}



getProductdetails(id:string){
  return this.Http.get<any>(`https://dummyjson.com/products/${id}`);
}


}
