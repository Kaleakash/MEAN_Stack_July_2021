import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  storeProduct(product:Product):Observable<any> {
    return this.http.post("http://localhost:9090/api/product/storeProduct",product,{responseType:'text'});
  }

  retrieveProductInfo():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/api/product/getAllProduct")
  }

  deleteProductInfo(id:any):Observable<any> {
    return this.http.delete("http://localhost:9090/api/product/deleteProdut/"+id,{responseType:"text"})
  }
}
