import { Component, OnInit } from '@angular/core';
import {RectangleInputFormService} from './rectangle-input-form.service';
import {Rectangle} from '../models/rectangle';

@Component({
  selector: 'app-rectangle-input-form',
  templateUrl: './rectangle-input-form.component.html',
  styleUrls: ['./rectangle-input-form.component.css']
})
export class OtherStuffComponent implements OnInit {
  public canvas: any;
  public rectangle: Rectangle;
  public rectangles: Rectangle[];

  constructor( public rectangleInputFormService: RectangleInputFormService ) { }
  displayedColumns: string[] = ['left', 'right', 'top', 'bottom'];

  ngOnInit() {
    this.rectangles = [];
    this.canvas = document.getElementById('stage');
    this.rectangle = new  Rectangle();
  }

  public drawRectangle(left: number, right: number, top: number, bottom: number) {
    if (this.canvas.getContext) {
      let ctx = this.canvas.getContext('2d');

      ctx.beginPath();
      ctx.rect(left, right, top, bottom);
      ctx.stroke();
    }
    this.setRectangleShape(this.rectangle);
  }

  public drawRectangleOnClearCanvas(left: number, right: number, top: number, bottom: number) {

    if (this.canvas.getContext) {
      let ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.beginPath();
      ctx.rect(left, bottom, top, right);
      ctx.stroke();
    }
  }

  public setRectangleShape(shapes: any) {
    this.rectangleInputFormService.setRectangleShapes(shapes).subscribe((respone) => {
      console.log(respone);
      //this.dataSource ={};
      this.getAllRectangles();
    });
  }

  private getAllRectangles() {
    this.rectangles = [];
    this.rectangleInputFormService.getAllRectangles().subscribe((respone) =>{
      respone.forEach(rectangle => {
        this.rectangles.push(rectangle);
      });
      console.log(this.rectangles);
      //this.dataSource = this.rectangles;
    });
  }

  public getRecord(row){
    console.log(row);
    this.drawRectangleOnClearCanvas(row.left, row.bottom, row.top, row.right);
  }
}
