import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
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
