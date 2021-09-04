import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRef = new FormGroup({
    id:new FormControl(),
    pname:new FormControl(),
    price :new FormControl()
  });
  constructor(public pser:ProductService) { } // DI for ProductServic class. 
  msg:string="";
  ngOnInit(): void {
  }
  storeRecord() {
    let product = this.productRef.value;
    //console.log(product);
    this.pser.storeProductDetails(product).subscribe(result=> {
        this.msg = "Record stored successfully"
    },error=> {
      this.msg = "Product Id must be unique"
    });
    this.productRef.reset();
  }
}
