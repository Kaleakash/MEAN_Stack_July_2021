import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeeInfo } from './employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }   // DI for HttpClient API

  sayHello(name:string):string {
    return "Welcome to Simple Service class "+name;
  }

  loadEmployeeInfo():Observable<EmployeeInfo> {
    return this.http.get<EmployeeInfo>("https://dummy.restapiexample.com/api/v1/employees")
  }
}
