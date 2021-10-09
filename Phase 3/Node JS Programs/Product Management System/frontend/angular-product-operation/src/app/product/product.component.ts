
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

  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  });

  storeProduct(){
    let product = this.productRef.value;
    console.log(product);
  }
  constructor(public prodSer:ProductService) { }

  // this funtion call automatically after constructor and it will call only once. 
  // this function mainly use to do any initialization 
  ngOnInit(): void {
    this.loadAllProductDetails();
  }

  loadAllProductDetails() {
    this.prodSer.loadAllProductInfo().subscribe(data=>this.products=data);
  }
}
