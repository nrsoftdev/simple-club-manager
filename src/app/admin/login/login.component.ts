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
  constructor( public authService: AuthService) { }

  /*
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
*/
  loginEmail()
  {

  }

  logout() {
    //this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
