import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName:string ="";
  stdNames:Array<string>=[];
  cAge?:number;
  
  childDesg?:string;
  @ViewChild(Child1Component)     // DI 
  child1?:Child1Component;

  passName(nameRef:any){
    this.parentName=nameRef.value;
    this.stdNames.push(nameRef.value);
  }
  getChildDesg() {
  this.childDesg= this.child1?.desg;
  }
}
