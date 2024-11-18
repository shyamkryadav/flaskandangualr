import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://127.0.0.1:5000/predict';
  private uploadUrl = 'http://127.0.0.1:5000/upload';

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

  

  uploadFiles(files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    // Make a POST request to send the files
    return this.http.post(this.uploadUrl, formData, {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data' is not needed as it is set automatically.
      }),
      reportProgress: true,
      observe: 'events' // to monitor progress if needed
    });
  }
}

