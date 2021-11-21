import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-app';
  id:number =100;
  name:string ="Rajesh";
  salary:number = 12000;
  result : boolean = true;
  msg:string="Welcome to Angular Training";
  names:Array<string>=["Raj","Seeta","Veera","Ajay","Vijay"];

  sayHello():string {
    return "Welcome to Angular testing";
  }
  checkUser(name:string,pass:string):boolean {
    if(name=="Raj" && pass=="123"){
      return true;
    }else {
      return false;
    }
  }
}
