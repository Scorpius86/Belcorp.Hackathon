import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material';
import { CoreComponent } from './containers/core/core.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    CoreComponent,
  ],
  entryComponents: [ 
  ],
  exports: [
    CoreComponent,
  ],
  providers: [
  ]
})
export class CoreModule {

}
