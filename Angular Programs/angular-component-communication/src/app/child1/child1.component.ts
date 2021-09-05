import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()
  studentsName:Array<string>=[];

  childAge?:number;

  @Output()
  eventRef = new EventEmitter();

  desg:string="Tester";
  
  @Input()
  pname:string="";      // this variable is ready to receive the 
  constructor() { }     // value from parent component.

  ngOnInit(): void {
  }

  passAge(ageRef:any){
    this.childAge = ageRef.value;
    // This refernce help us to pass the value 
    this.eventRef.emit(this.childAge);
  }

}
