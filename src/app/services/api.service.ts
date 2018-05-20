import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUrlInfo(url: string) {
    return this.http.get(url).pipe(
      catchError(this.handleError())
    );
  }

  private handleError(defaultResult?: any) {
    return (error: any): Observable<any> => {

      console.error(error); // log the error using custom logger

      return of(defaultResult);
    };
  }

}
