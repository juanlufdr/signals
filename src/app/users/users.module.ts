import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPageModule } from './pages/user-page/user-page.module';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserPageModule,
    ReactiveFormsModule
  ],
  exports: [UserPageModule],
  declarations: [UserModalComponent],
  providers: [],
})
export class UsersModule { }
