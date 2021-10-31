import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
userRef = new FormGroup({
  email:new FormControl(),
  password:new FormControl()
});

  constructor(public userSer:UserService) { } // DI for Service class

  ngOnInit(): void {
  }

  checkUser() {
    let user = this.userRef.value;
    this.userSer.checkUser(user).subscribe(result=> {
      console.log(result);
    });
    
  }
}
