import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { LoginComponent } from './admin/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from './service/auth.service';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from './angular-material.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { SignupComponent } from './admin/signup/signup.component';
import { ForgotpwdComponent } from './admin/forgotpwd/forgotpwd.component';
import { VerifyemailComponent } from './admin/verifyemail/verifyemail.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { MemberService } from './service/member.service';
import { FormsModule } from '@angular/forms';
import { LoginGoogleComponent } from './admin/login-google/login-google.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent,
    MemberComponent,
    SignupComponent,
    ForgotpwdComponent,
    VerifyemailComponent,
    LoginGoogleComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AngularFirestore, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
