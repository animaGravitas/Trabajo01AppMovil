import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitucionPageRoutingModule } from './institucion-routing.module';

import { InstitucionPage } from './institucion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitucionPageRoutingModule
  ],
  declarations: [InstitucionPage]
})
export class InstitucionPageModule {}
