import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './login-default/input/input.component';
import { ButtonComponent } from './login-default/button/button.component';
import { LoginDefaultComponent } from './login-default/login-default.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LoginDefaultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
