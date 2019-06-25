import { Component, OnInit } from '@angular/core';
import { CircleInputFormService} from './circle-input-form.component.service';
import {Circle} from '../models/circle';

@Component({
  selector: 'app-circle-input-form',
  templateUrl: './circle-input-form.component.html',
  styleUrls: ['./circle-input-form.component.css']
})
export class CircleInputFormComponent implements OnInit {
  dataSource: any;
  constructor(public geometricShapesInputFormService: CircleInputFormService) { }
  displayedColumns: string[] = ['radius', 'x', 'y'];

  public canvas: any;
  public circle: Circle;
  public circles: Circle[];

  ngOnInit() {
    this.circles = [];
    this.dataSource =[];
    this.canvas = document.getElementById('stage');
    this.circle = new Circle();
    this.geometricShapesInputFormService.getAllCircles().subscribe((respone) =>{
      respone.forEach(circle => {
        this.circles.push(circle);
      });
      this.dataSource =this.circles;
      console.log(this.circles);
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
    this.setShapes(this.circle);
  }

  private getAllCircles() {
    this.circles = [];
    this.geometricShapesInputFormService.getAllCircles().subscribe((respone) =>{
      respone.forEach(circle => {
        this.circles.push(circle);
      });
      console.log(this.circles);
      this.dataSource =this.circles;
    });
  }

  public drawCircleOnClearCanvas(X: number, Y: number, radius: number) {

    if (this.canvas.getContext) {
      let ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.beginPath();
      // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.arc(X, Y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  public drawCircleInsideRectangle(){
    this.geometricShapesInputFormService.setRectangleIntoCircle(1,2).subscribe((respone) =>{
      console.log(respone);
    });
  }

  public setShapes(shapes: any) {
    this.geometricShapesInputFormService.setGeometricShapes(shapes).subscribe((respone) => {
      console.log(respone);
      this.dataSource ={};
      this.getAllCircles();
    });
  }

  public getRecord(row){
    console.log(row);
    this.drawCircleOnClearCanvas(row.x,row.y,row.radius);
  }
}
