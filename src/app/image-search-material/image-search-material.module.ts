import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdInputModule, MdButtonModule, MdToolbarModule, MdProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdProgressBarModule
  ],
  declarations: [],
  exports: [
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdProgressBarModule
  ]
})
export class ImageSearchMaterialModule { }
