import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UsersSignalsPageComponent } from './users-signals-page.component';
import { UsersSignalsPageRoutingModule } from './user-signals-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersSignalsPageRoutingModule
  ],
  exports: [UsersSignalsPageComponent],
  declarations: [UsersSignalsPageComponent],
  providers: [],
})
export class UserSignalsPageModule { }
