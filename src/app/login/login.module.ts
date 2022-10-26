import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './login-default/input/input.component';
import { ButtonComponent } from './login-default/button/button.component';
import { LoginDefaultComponent } from './login-default/login-default.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LoginDefaultComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LoginModule { }
