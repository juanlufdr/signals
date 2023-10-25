import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersSignalsPageComponent } from './users-signals-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersSignalsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersSignalsPageRoutingModule {}
