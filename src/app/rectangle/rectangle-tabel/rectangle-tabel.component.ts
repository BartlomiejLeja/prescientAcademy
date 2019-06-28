import { Component, OnInit } from '@angular/core';
import { Rectangle } from 'src/app/models/rectangle';
import { RectangleService } from '../services/rectangle.service';
import { DrawingService } from '../services/drawing.service';

@Component({
  selector: 'app-rectangle-tabel',
  templateUrl: './rectangle-tabel.component.html',
  styleUrls: ['./rectangle-tabel.component.css']
})
export class RectangleTabelComponent implements OnInit {
  public displayedColumns: string[] = ['left', 'right', 'top', 'bottom'];
  public rectangles: Rectangle[];
  public dataSource: any;
  constructor(public rectangleService: RectangleService, public drawingService: DrawingService) { }

  ngOnInit() {
    this.rectangles = [];
    this.dataSource = [];
    this.rectangleService.getAllRectangles().subscribe((respone) => {
      respone.forEach( rectangle => {
        this.rectangles.push(rectangle);
      });
      this.dataSource = this.rectangles;
      console.log(this.rectangles);
    });
  }

  public getRecord(row) {
    console.log(row);
    this.drawingService.drawRectangleOnClearCanvas(row.left, row.right, row.top, row.bottom);
  }
}
