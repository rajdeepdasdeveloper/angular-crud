import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninSignupRoutingModule, signinSignupComponents } from './signin-signup-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    signinSignupComponents,
  ],
  imports: [
    CommonModule,
    SigninSignupRoutingModule,
    FormsModule
  ]
})
export class SigninSignupModule { }
