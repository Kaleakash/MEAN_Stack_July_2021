import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   // <app-root></app-root>
  templateUrl: './app.component.html',  // templateUrl is use to connect html page
  styleUrls: ['./app.component.css']  // styleUrls is use to connect css page 
})
export class AppComponent {
  name:string ="RAj Deep";
  id:number =100;
  age : number = 21;
  result :boolean = true;

}
