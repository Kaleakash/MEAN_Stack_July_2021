import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  checkUser(user:User): Observable<any>{
    return this.http.post("http://localhost:9090/api/user/signIn",user,{responseType:"text"});
  }
}
