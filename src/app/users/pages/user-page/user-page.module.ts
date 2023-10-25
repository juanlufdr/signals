import { NgModule } from '@angular/core';

import { UsersPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UsersPageRoutingModule
  ],
  exports: [UserPageComponent],
  declarations: [UserPageComponent],
  providers: [],
})
export class UserPageModule { }
