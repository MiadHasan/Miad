import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeDefaultComponent,
    HomeChildComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HomeModule { }
