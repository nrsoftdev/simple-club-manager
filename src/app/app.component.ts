import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-club-manager';

  constructor()
  {
    registerLocaleData(localeIt, 'it-IT');    
  }


}
