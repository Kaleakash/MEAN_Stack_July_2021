import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  numberDetails:Array<number>=[];
  constructor(public ser:SharedService) { } // DI for Service class 

  ngOnInit(): void {
  }

  passNumbers(numberRef:any){
    this.numberDetails.push(numberRef.value);
    this.ser.setArrayInfo(this.numberDetails);
  }

}
