import { Component, OnInit } from '@angular/core';
import { Rectangle } from 'src/app/models/rectangle';
import { DrawingService } from '../services/drawing.service';
import { RectangleService } from '../services/rectangle.service';

@Component({
  selector: 'app-rectangle-input-form',
  templateUrl: './rectangle-input-form.component.html',
  styleUrls: ['./rectangle-input-form.component.css']
})
export class RectangleInputFormComponent implements OnInit {
  public canvas: any;
  public rectangle: Rectangle;

  constructor( public rectangleService: RectangleService, public drawingService: DrawingService) {
   }

  ngOnInit() {
    // this.canvas = document.getElementById('stage');
    this.drawingService.canvas = document.getElementById('stage');
    this.rectangle = new  Rectangle();
  }
}
