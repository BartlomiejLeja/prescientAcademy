import { Injectable } from '@angular/core';
import { Rectangle } from 'src/app/models/rectangle';
import { RectangleService } from './rectangle.service';

@Injectable({
    providedIn: 'root',
})
export class DrawingService {
    constructor(public rectangleService: RectangleService) {}
    public canvas: any;
    public dataSource: Array<any>;
    public rectangle: Rectangle;
    public rectangles: Rectangle[];

    public drawRectangle(left: number, right: number, top: number, bottom: number) {
        if (this.canvas.getContext) {
          let ctx = this.canvas.getContext('2d');
          ctx.beginPath();
          ctx.rect(left, right, top, bottom);
          ctx.stroke();
        }
        let rectangle = new Rectangle();
        rectangle.bottom = bottom;
        rectangle.top = top;
        rectangle.left = left;
        rectangle.right = right;

        this.setRectangleShape(rectangle);
      }

      public drawRectangleOnClearCanvas(left: number, right: number, top: number, bottom: number) {
        if (this.canvas.getContext) {
          let ctx = this.canvas.getContext('2d');
          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          ctx.beginPath();
          ctx.rect(left, right, top, bottom);
          ctx.stroke();
        }
      }

      public setRectangleShape(shapes: any) {
        this.rectangleService.setRectangleShapes(shapes).subscribe((respone) => {
          console.log(respone);
          this.dataSource = new Array<any>();
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