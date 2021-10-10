import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees?:Array<Employee>;
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
    this.empSer.loadEmployeeInfo().subscribe(result=>this.employees=result);
  }

}
