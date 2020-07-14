import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
// Import canActivate guard services
// import { AuthGuard } from "./shared/guard/auth.guard";
import { SignupComponent } from './admin/signup/signup.component';
import { ForgotpwdComponent } from './admin/forgotpwd/forgotpwd.component';
import { VerifyemailComponent } from './admin/verifyemail/verifyemail.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/logout', component: LogoutComponent },

  // La guardia inibisce la navigazione
  // { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MembersComponent},
  { path: 'member', component: MemberComponent},
  { path: 'admin/signup', component: SignupComponent },
  { path: 'admin/forgot-pwd', component: ForgotpwdComponent },
  { path: 'admin/verify-email', component: VerifyemailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
