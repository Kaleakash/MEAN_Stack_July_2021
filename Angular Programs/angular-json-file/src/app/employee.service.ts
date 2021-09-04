import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { } //DI

  // loadJsonData() {
  //   this.http.get("/assets/employees.json").
  //   subscribe(result=>console.log(result),
  //   error=>console.log(error),
  //   ()=>console.log("Completed"));
  // }

  loadJsonData() :Observable<Employee[]>{
    return this.http.get<Employee[]>("/assets/employees.json");
  }
}
