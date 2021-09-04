import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Array<Employee>=[];

  constructor(public empSer:EmployeeService) { }    // DI for Service class 
  // angular life cycle method which call after constructor 
  // it is use to do any initialization purpose. it also known as hook 
  ngOnInit(): void {
        this.empSer.loadJsonData().
        subscribe(data=>this.employees=data,error=>console.log(error));
  }

}
