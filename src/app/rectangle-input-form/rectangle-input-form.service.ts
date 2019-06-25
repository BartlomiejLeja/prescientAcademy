import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class RectangleInputFormService {
    constructor(private http: HttpClient) {}

    public setRectangleShapes(rectangle: any): Observable<any> {
        return this.http.post('http://localhost:57756/api/Rectangles', rectangle);
    }

    public getAllRectangles(): Observable<any>  {
        return this.http.get('http://localhost:57756/api/Rectangles');
    }
}