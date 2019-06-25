import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircleInputFormComponent } from './circle-input-form/circle-input-form.component';
import { OtherStuffComponent } from './rectangle-input-form/rectangle-input-form.component';
import { CircleInsideRectangleCanvaComponent } from './circle-inside-rectangle-canva/circle-inside-rectangle-canva.component';
import { RectangleTabComponent } from './rectangle/rectangle-tab/rectangle-tab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rectangleTab',
    pathMatch: 'full'
  },
  { path: 'circleInputForm', component: CircleInputFormComponent },
  { path: 'rectangleTab', component: RectangleTabComponent},
  { path: 'circleInsideRectangleCanva', component: CircleInsideRectangleCanvaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
