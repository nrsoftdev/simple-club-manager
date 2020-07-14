import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.css']
})
export class VerifyemailComponent implements OnInit {

  constructor(public authService: AuthService) { }

  sendVerificationEmail()
  {
    this.authService.SendVerificationMail()
  }

  ngOnInit() {
  }

}