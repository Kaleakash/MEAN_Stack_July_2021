import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  storeProductDetails(product:Product):Observable<any>{
    // 1st parameter is url 
    //2nd parameter is data in json format. 
    return this.http.post("http://localhost:3000/products",product);
  }
}
