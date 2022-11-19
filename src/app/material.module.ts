// material.module.ts

import { NgModule } from '@angular/core';
import {MatInputModule }from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})

export class MaterialModule { }
