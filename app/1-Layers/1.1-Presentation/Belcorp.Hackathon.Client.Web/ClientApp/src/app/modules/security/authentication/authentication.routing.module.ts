import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

const authenticationRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuthenticationRoutingModule {
}
