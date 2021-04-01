import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ],
  imports: [
    
  ]
})
export class PrimeNgModule { }
