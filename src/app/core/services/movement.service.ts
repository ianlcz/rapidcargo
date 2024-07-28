import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movement } from '../models/movement.model';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private apiUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getMovements(): Observable<Movement[]> {
    return this.http
      .get<Movement[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Movement[]>('getMovements', [])));
  }

  createMovement(Movement: Movement): Observable<Movement> {
    return this.http
      .post<Movement>(
        this.apiUrl,
        this.getMovements().subscribe((movements) => {
          console.log([...movements, Movement]);

          return Movement;
        })
      )
      .pipe(catchError(this.handleError<Movement>('createNewMovement')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return throwError(
        () => new Error(`${operation} failed: ${error.message}`)
      );
    };
  }
}
