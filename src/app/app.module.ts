import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageService } from './providers/image.service';

import { ImageSearchMaterialModule } from './image-search-material/image-search-material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasonryModule } from 'angular2-masonry';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ImageSearchMaterialModule,
    BrowserAnimationsModule,
    MasonryModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
