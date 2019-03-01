import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SecurityGuardService } from '../../services/security/security-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './containers/main/main.component';

const homeRoutes: Routes = [
  {
    path: 'Hackathon',
    component: MainComponent,
    canActivate: [SecurityGuardService],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
