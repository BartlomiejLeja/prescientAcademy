import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RectangleService {
    constructor(private http: HttpClient) {}

    public setRectangleShapes(rectangle: any): Observable<any> {
        return this.http.post(`${environment.serverUrl}/Rectangles`, rectangle);
    }

    public getAllRectangles(): Observable<any>  {
        return this.http.get(`${environment.serverUrl}/Rectangles`);
    }
}

