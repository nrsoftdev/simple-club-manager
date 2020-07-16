import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-club-manager';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer)  {
      registerLocaleData(localeIt, 'it-IT');

      this.matIconRegistry.addSvgIcon(
        `loginG`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/images/icons8-google-48.svg`)
    );
  }


}
