import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = true;
  f2:boolean = false;
  f3:boolean = true;
  b1:string ="Hide";
  flag:boolean = true;
  num:Array<number>=[10,20,30,40,50,60];      // array number 
  names:Array<string>=["Raj","Raju","Ram","Ramesh","Rajesh"]; // array string 
  emp = new Employee(100,"Raj",32);
  employees:Array<Employee>=new Array();    // array object. 
  constructor() { 
      let emp1 = new Employee(101,"Ramesh",25);
      let emp2 = new Employee(102,"Raju",28);
      let emp3 = new Employee(103,"Ajay",32);
      let emp4 = new Employee(104,"Vijay",35);
      this.employees.push(emp1);
      this.employees.push(emp2);
      this.employees.push(emp3);
      this.employees.push(emp4);
  }
  ngOnInit(): void {
  }
  fun() {
    this.f3 = false;
  }
  change(){
      if(this.flag){
        this.flag= false;
        this.b1="Show"
      }else {
        this.flag= true;
        this.b1="Hide"
      }
  }
}
