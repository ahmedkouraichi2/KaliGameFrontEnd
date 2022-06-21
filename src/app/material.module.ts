// material.module.ts

import { NgModule } from '@angular/core';
import {MatInputModule }from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class MaterialModule { }
