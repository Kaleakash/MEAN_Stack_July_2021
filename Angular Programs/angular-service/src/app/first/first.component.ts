import { Component, OnInit } from '@angular/core';
import { MyCustomService } from '../custom.service';
import { MyService } from '../my.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg1:string=""
  msg2:string=""
  constructor(public mySer:MyCustomService) { }   // DI : pulling the object from container 
  ngOnInit(): void {
  }
  fun1() {
    let ser = new MyService();
    this.msg1=ser.display();
  }
  fun2() {
      this.msg2=this.mySer.display();
  }
}
