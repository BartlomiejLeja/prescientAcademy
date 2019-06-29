import { Component, OnInit } from '@angular/core';
import { Rectangle } from 'src/app/models/rectangle';;
import { DrawingService } from '../services/drawing.service';
import { RectangleService } from '../services/rectangle.service';

@Component({
  selector: 'app-rectangle-input-form',
  templateUrl: './rectangle-input-form.component.html',
  styleUrls: ['./rectangle-input-form.component.css']
})
export class RectangleInputFormComponent implements OnInit {
  dataSource: any;
  public canvas: any;
  public rectangle: Rectangle;
  public rectangles: Rectangle[];

  constructor( public rectangleService: RectangleService, public drawingService: DrawingService) {
   }
  displayedColumns: string[] = ['left', 'right', 'top', 'bottom'];

  ngOnInit() {
    this.rectangles = [];
    this.dataSource = [];
    // this.canvas = document.getElementById('stage');
    this.drawingService.canvas = document.getElementById('stage');
    this.rectangle = new  Rectangle();
    this.rectangleService.getAllRectangles().subscribe((respone) => {
      respone.forEach( rectangle => {
        this.rectangles.push(rectangle);
      });
      this.dataSource = this.rectangles;
      console.log(this.rectangles);
    });
  }

  public drawRectangle(left: number, right: number, top: number, bottom: number) {
    if (this.drawingService.canvas.getContext) {
      let ctx = this.drawingService.canvas.getContext('2d');

      ctx.beginPath();
      ctx.rect(left, right, top, bottom);
      ctx.stroke();
    }
    this.setRectangleShape(this.rectangle);
  }

  public setRectangleShape(shapes: any) {
    this.rectangleService.setRectangleShapes(shapes).subscribe((respone) => {
      console.log(respone);
      this.dataSource ={};
      this.getAllRectangles();
    });
  }

  private getAllRectangles() {
    this.rectangles = [];
    this.rectangleService.getAllRectangles().subscribe((respone) =>{
      respone.forEach( rectangle => {
        this.rectangles.push(rectangle);
      });
      console.log(this.rectangles);
      this.dataSource = this.rectangles;
    });
  }
}
