
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
  products?:Array<Product>;
  storeMsg?:string;
  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  });
  searchData?:any;
  constructor(public prodSer:ProductService) { }
  storeProduct(){
    let product = this.productRef.value;
    //console.log(product);
    this.prodSer.storeProductInfo(product).subscribe(result=> {
      this.storeMsg=result;
      this.loadAllProductDetails();
    });
    this.productRef.reset();
  }
  searchRecord(pid:any){
    //console.log(pid);
    this.prodSer.checkProductDetails(pid).subscribe(result=> 
      {
        this.searchData=result;
        //console.log(result.pid);
      // if(result.pid==undefined){
      //   this.searchData="REcord not present with id as "+pid;
      // }else {
      //   this.searchData = result;
      // }
      },error=>this.searchData="Please enter the id");
  }

  // this funtion call automatically after constructor and it will call only once. 
  // this function mainly use to do any initialization 
  ngOnInit(): void {
    this.loadAllProductDetails();
  }
  deleteMsg?:string;
  deleteProduct(pid:any){
    console.log(pid);
    this.prodSer.deleteProductById(pid).subscribe(result=> {
      this.deleteMsg=result;
      this.loadAllProductDetails();
    })
  }
  pid1?:number;
  price1?:number;
  flag:boolean = false;
  updateProduct(product:Product) {
    //console.log(product);
    this.pid1 = product.pid;
    this.price1 = product.price;
    this.flag = true;
  }
  loadAllProductDetails() {
    this.prodSer.loadAllProductInfo().subscribe(data=>this.products=data);
  }
updatedResult?:string;
  updateRecordInfo(){
    //console.log(this.pid1 +" "+this.price1);
    let productUpdate = {pid:this.pid1,price:this.price1};
    this.prodSer.updateProductPrice(productUpdate).subscribe(result=> {
        this.updatedResult= result;
        this.flag = false;
        this.loadAllProductDetails();
    })
  }
}
