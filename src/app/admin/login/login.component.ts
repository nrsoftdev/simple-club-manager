import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// public afAuth: AngularFireAuth
  constructor(public authService: AuthService) { }

  loginEmail(userName: any, userPassword: any )  {
    console.log(`loginEmail ${userName} ${userPassword}`);
    this.authService.SignIn(userName, userPassword);
  }


  ngOnInit() {
  }

}
