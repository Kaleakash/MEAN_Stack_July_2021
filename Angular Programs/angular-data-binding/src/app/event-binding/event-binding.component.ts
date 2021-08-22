import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="Hello";
  name:string="";
  sum?:number;
  constructor() { }
  ngOnInit(): void {
  }
  fun() : void {
    console.log("Event fired...")
    this.msg = "Welcome to Event Binding";
  }
  passName(nameRef:any): void {
    this.name = nameRef.value;
    console.log(this.name);
  }

  addNumber(n1:any,n2:any){
    this.sum = eval(n1.value)+eval(n2.value);
  }
}
