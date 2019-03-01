import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './containers/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    DashboardComponent,
  ],
})
export class MainModule { }
