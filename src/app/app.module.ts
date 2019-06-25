import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CircleInputFormComponent } from './circle-input-form/circle-input-form.component';
import { OtherStuffComponent } from './rectangle-input-form/rectangle-input-form.component';
import { CircleInsideRectangleCanvaComponent } from './circle-inside-rectangle-canva/circle-inside-rectangle-canva.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleInputFormComponent,
    OtherStuffComponent,
    CircleInsideRectangleCanvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatTableModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


