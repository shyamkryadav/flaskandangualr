import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://127.0.0.1:5000/predict';

  constructor(private http: HttpClient) {}

  predict(data: any) {
    return this.http.post<any>(this.apiUrl, data).pipe(
      catchError((error) => {
        console.error('Error in PredictionService:', error);
        return throwError(() => error);
      })
    );
  }

  getPrediction(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);  // Make the POST request
  }
}
