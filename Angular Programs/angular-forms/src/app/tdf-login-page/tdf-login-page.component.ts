import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginRef:NgForm) : void {
    //console.log("Event fired...")
    //console.log(loginRef);
    let login = loginRef.value;
    //console.log(login);
    if(login.user=="Raj" && login.pass=="A56"){
        this.msg = "Successfully Login"
    }else {
        this.msg = "Failure try once again"
    }
    loginRef.reset();     // reset the text field and passworfield values.
  }
}
