import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {UserAddComponent} from "./components/user/user-add/user-add.component";
import {UserEditComponent} from "./components/user/user-edit/user-edit.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'create',
        component: UserAddComponent
      },
      {
        path: ':id/edit',
        component: UserEditComponent
      },
      {
        path: ':id/delete',
        component: UserListComponent
      }
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
