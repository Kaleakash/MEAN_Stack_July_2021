import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    price:new FormControl()
  });
  constructor(public pSer:ProductService) { }   // DI 
  msg:string="";
  products:Array<Product>=[];
  deleteMsg:string="";
  // it will call only once 
  ngOnInit(): void {
    this.retreiveAllProductDetails();
  }

  storeProduct(){
    let product = this.productRef.value;
    //console.log(product);
    this.pSer.storeProduct(product).subscribe(result=>{
      this.msg=result;
      this.retreiveAllProductDetails();   // calling this function to load the data. 
    });
    this.productRef.reset();
  }
  retreiveAllProductDetails() {
    this.pSer.retrieveProductInfo().subscribe(result=>this.products=result);
  }
  deleteRec(id:any){
    console.log(id);
    this.pSer.deleteProductInfo(id).subscribe(result=>{
      this.deleteMsg=result;
      this.retreiveAllProductDetails();
    });
  }
}


