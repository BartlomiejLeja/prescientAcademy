import { Component, OnInit } from '@angular/core';
import { CircleInputFormService } from '../circle-input-form/circle-input-form.component.service';
import {RectangleInputFormService} from '../rectangle-input-form/rectangle-input-form.service';
import {Circle} from '../models/circle';
import {Rectangle} from '../models/rectangle';

@Component({
  selector: 'app-circle-inside-rectangle-canva',
  templateUrl: './circle-inside-rectangle-canva.component.html',
  styleUrls: ['./circle-inside-rectangle-canva.component.css']
})
export class CircleInsideRectangleCanvaComponent implements OnInit {

  constructor(public geometricShapesInputFormService: CircleInputFormService,
    public rectangleInputFormService: RectangleInputFormService) { }
  displayedCircleColumns: string[] = ['radius', 'x', 'y'];
  displayedRectangleColumns: string[] = ['left', 'right', 'top', 'bottom'];
  public circle: Circle;
  public circles: Circle[];
  circleDataSource: any;
  rectangleDataSource: any;
  public canvas: any;

  public rectangle: Rectangle;
  public rectangles: Rectangle[];

  ngOnInit() {
    this.getAllCircles();
    this.getAllRectangles();
    this.canvas = document.getElementById('stage');
  }

  public getCircleRecord(row){
    console.log(row);
    //this.drawCircleOnClearCanvas(row.x,row.y,row.radius);
    this. drawCircle(row.x,row.y,row.radius);
  }

  public getRectangleRecord(row){
    this.drawRectangle(row.left,row.bottom,row.top,row.right);
  }

  private getAllCircles() {
    this.circles = [];
    this.geometricShapesInputFormService.getAllCircles().subscribe((respone) =>{
      respone.forEach(circle => {
        this.circles.push(circle);
      });
      console.log(this.circles);
      this.circleDataSource = this.circles;
    });
  }

  private getAllRectangles() {
    this.rectangles = [];
    this.rectangleInputFormService.getAllRectangles().subscribe((respone) =>{
      respone.forEach(rectangle => {
        this.rectangles.push(rectangle);
      });
      console.log(this.rectangles);
      this.rectangleDataSource = this.rectangles;
    });
  }

  public drawRectangle(left: number, right: number, top: number, bottom: number) {
    if (this.canvas.getContext) {
      let ctx = this.canvas.getContext('2d');

      ctx.beginPath();
      //ctx.rect(20, 20, 150, 100);
      ctx.rect(left, bottom, top, right);
      ctx.stroke();
    }
  }

  public clearCanvas() {

    if (this.canvas.getContext) {
      let ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  public drawCircleInsideRectangle(){
    this.geometricShapesInputFormService.setRectangleIntoCircle(1,2).subscribe((respone) =>{
      console.log(respone);
    });
  }

  public drawCircle(X: number, Y: number, radius: number) {
    if (this.canvas.getContext) {
      let ctx = this.canvas.getContext('2d');

      ctx.beginPath();
      // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.arc(X, Y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}
