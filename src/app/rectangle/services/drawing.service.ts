import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DrawingService {
    constructor() {}
    public canvas: any;

    public drawRectangle(left: number, right: number, top: number, bottom: number) {
        if (this.canvas.getContext) {
          let ctx = this.canvas.getContext('2d');
          ctx.beginPath();
          ctx.rect(left, right, top, bottom);
          ctx.stroke();
        }
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

}