import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginDefaultComponent } from './login/login-default/login-default.component';
import {HomeDefaultComponent} from './home/home-default/home-default.component';

const routes: Routes = [
  { path: 'login', component: LoginDefaultComponent },
  { path: 'home', component: HomeDefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
