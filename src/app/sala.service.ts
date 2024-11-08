import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {Sala} from './sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private apiUrl = 'http://127.0.0.1:8000/salas/';

  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  obtenerSalaPorId(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.apiUrl}${id}`);
  }

  eliminarSala(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }

  editarSala(id: number, sala: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}`, sala);
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
