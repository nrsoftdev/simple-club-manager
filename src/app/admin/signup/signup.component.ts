import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  signupEmail(userName, userPassword )
  {
    console.log("loginEmail "  + userName + " " + userPassword);
    this.authService.SignUp(userName, userPassword);
  }

  ngOnInit() {
  }

}
