import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class CircleInputFormService {
    constructor(private http: HttpClient) {}

    public setGeometricShapes(shapes: any): Observable<any> {
        return this.http.post(`${environment.serverUrl}/Circles`, shapes);
    }

    public setRectangleIntoCircle(circleId: number, rectangleId ): Observable<any> {
        return this.http.post(`${environment.serverUrl}/Circles/${circleId}/insiderectangle/${rectangleId}`,{});
    }

    public getAllCircles(): Observable<any> {
        return this.http.get(`${environment.serverUrl}/Circles`);
    }
}
