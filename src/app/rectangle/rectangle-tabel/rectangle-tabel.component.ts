import { Component, OnInit } from '@angular/core';
import { RectangleInputFormService } from 'src/app/rectangle-input-form/rectangle-input-form.service';
import { Rectangle } from 'src/app/models/rectangle';

@Component({
  selector: 'app-rectangle-tabel',
  templateUrl: './rectangle-tabel.component.html',
  styleUrls: ['./rectangle-tabel.component.css']
})
export class RectangleTabelComponent implements OnInit {
  public displayedColumns: string[] = ['left', 'right', 'top', 'bottom'];
  public rectangles: Rectangle[];
  public dataSource: any;
  constructor(public rectangleInputFormService: RectangleInputFormService) { }

  ngOnInit() {
    this.rectangles = [];
    this.dataSource = [];
    this.rectangleInputFormService.getAllRectangles().subscribe((respone) => {
      respone.forEach( rectangle => {
        this.rectangles.push(rectangle);
      });
      this.dataSource = this.rectangles;
      console.log(this.rectangles);
    });
  }

}
