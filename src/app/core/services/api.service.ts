import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  formatError(error:any){
    return throwError(error);
  }

  get(url: string): Observable<any>{
    return this.http.get(url).pipe(catchError(this.formatError));
  }
  post(url: string,body: any | null): Observable<any>{
    return this.http.post(url,body).pipe(catchError(this.formatError));
  }
}
