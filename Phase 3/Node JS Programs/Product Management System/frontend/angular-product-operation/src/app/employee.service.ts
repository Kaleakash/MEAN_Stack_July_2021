import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  loadEmployeeInfo():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:9090/employees")
  }
}
