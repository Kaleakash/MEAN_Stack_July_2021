import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  
  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(2)]),
    pass:new FormControl("",[Validators.required,Validators.pattern("[A-Z]\\d{2}")]),              
    email:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]+\@[a-zA-Z]+\.com")])
  })
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(){
    let login = this.loginRef.value;
   // console.log(login);
   if(login.user=="Raj" && login.pass=="123"){
      this.msg = "Successfully Login!"
   }else {
      this.msg = "Failure try once again"
   }
   this.loginRef.reset();
  }

}
