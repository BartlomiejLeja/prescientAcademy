import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleInputFormComponent } from './rectangle-input-form/rectangle-input-form.component';
import { RectangleTabelComponent } from './rectangle-tabel/rectangle-tabel.component';
import { RectangleTabComponent } from './rectangle-tab/rectangle-tab.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  declarations: [RectangleInputFormComponent, RectangleTabelComponent, RectangleTabComponent],
  imports: [
    CommonModule,
    MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BrowserModule,
  ],
})
export class RectangleModule { }
