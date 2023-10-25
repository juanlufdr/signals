import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: () => import('./pages/user-page/user-page.module').then(m =>m.UserPageModule),
      },
      {
        path: 'list-signals',
        loadChildren: () => import('./pages/users-signals-page/user-signals-page.module').then(m =>m.UserSignalsPageModule),
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
