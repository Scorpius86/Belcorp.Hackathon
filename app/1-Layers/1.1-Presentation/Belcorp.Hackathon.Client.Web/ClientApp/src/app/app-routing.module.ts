import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuardService } from './services';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/Hackathon', pathMatch: 'full', canActivate: [SecurityGuardService] }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
