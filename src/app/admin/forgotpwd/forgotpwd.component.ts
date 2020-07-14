import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  constructor(public authService: AuthService) { }

  resetPwd(userEmail)  {
    this.authService.ForgotPassword(userEmail);
  }

  ngOnInit() {
  }

}
