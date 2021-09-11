import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  })
  constructor(public loginSer:LoginService,
    public router:Router) { }   //DI for Service class. 

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    //console.log(login);
     this.loginSer.checkUser().subscribe(result=> {
        let message = result.find(l=>l.user==login.user && l.pass==login.pass);
        if(message==undefined){
            console.log("Failure")
        }else {
          console.log("Success");
          this.router.navigate(["home"]);   
        }
      },error=>console.log(error));   
  }
  
}
