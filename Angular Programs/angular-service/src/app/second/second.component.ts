import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
msg1:string=""
  constructor() { }

  ngOnInit(): void {
  }
  fun1() {
    let ser = new MyService();
    this.msg1 = ser.display();
  }

}
