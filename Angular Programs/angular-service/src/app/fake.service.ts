import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fake } from './fake.model';
@Injectable({
  providedIn: 'root'  // this property is equal to providers attributre in app.module.ts file
})
export class FakeService {

  constructor(public http:HttpClient) { } // DI for HttpClient API

  // loadFakeJsonData() {
  //   this.http.get("https://jsonplaceholder.typicode.com/todos").
  //   subscribe(result=>console.log(result),error=>console.log(error),()=>console.log("Completed"));
  // }

  // using Observable we converted all json data into Fake object in array format. 
  loadFakeJosnData() : Observable<Fake[]>{
    return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
