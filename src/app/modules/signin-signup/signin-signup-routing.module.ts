import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginRegisterService } from './services/login-register/login-register.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    //{ path: '**', redirectTo: '/signin' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [
      LoginRegisterService,
    ]
})
export class SigninSignupRoutingModule { }

// Pages
export const signinSignupComponents = [
    SigninComponent,
    SignupComponent
];