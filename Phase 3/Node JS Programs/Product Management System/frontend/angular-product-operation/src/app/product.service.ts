import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// HttpClient all method by default return type is json consider. 
  constructor(public http:HttpClient) { } //DI 

  loadAllProductInfo():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/allProducts")
  }

  // post method takes 2 parameter 
  //1st parameter url and 2nd parameter json data. 
  // by default result consider as json format. 
  storeProductInfo(product:Product):Observable<any>{
    return this.http.post("http://localhost:9090/storeProduct",product,{responseType:'text'})
  }

  checkProductDetails(pid:any):Observable<Product>{
    return this.http.get<Product>("http://localhost:9090/findProductById/"+pid);
  }

  deleteProductById(pid:any):Observable<any>{
    return this.http.delete("http://localhost:9090/deleteProductById/"+pid,{responseType:'text'});
  }
  // 2 parameter , 1st parameter url and 2nd parameter json data. 
  updateProductPrice(product:any):Observable<any>{
    return this.http.put("http://localhost:9090/updateProductPrice",product,{responseType:'text'});
  }

}
