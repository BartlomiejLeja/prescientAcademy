import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CircleInputFormService {
    constructor(private http: HttpClient) {}

    public setGeometricShapes(shapes: any): Observable<any> {
        return this.http.post('https://prescientacademybackendservice.azurewebsites.net/api/Circles', shapes);
    }

    public setRectangleIntoCircle(circleId : number, rectangleId ) : Observable<any> {
        return this.http.post(`https://prescientacademybackendservice.azurewebsites.net/api/Circles/${circleId}/insiderectangle/${rectangleId}`,{});
    }

    public getAllCircles(): Observable<any>  {
        return this.http.get('https://prescientacademybackendservice.azurewebsites.net/api/Circles');
    }
}