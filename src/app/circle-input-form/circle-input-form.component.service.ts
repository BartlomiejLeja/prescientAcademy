import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CircleInputFormService {
    constructor(private http: HttpClient) {}

    public setGeometricShapes(shapes: any): Observable<any> {
        return this.http.post('http://localhost:57756/api/Circles', shapes);
    }

    public setRectangleIntoCircle(circleId : number, rectangleId ) : Observable<any> {
        return this.http.post(`http://localhost:57756/api/Circles/${circleId}/insiderectangle/${rectangleId}`,{});
    }

    public getAllCircles(): Observable<any>  {
        return this.http.get('http://localhost:57756/api/Circles');
    }
}