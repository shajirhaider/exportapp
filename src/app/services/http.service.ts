import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://aurora-exportapp.herokuapp.com/';
  post(url: string, data: any): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});  
    try {
        return this.http.post<any>(this.baseUrl+url, data,{ observe: 'response' });
    } catch (err) {
        return throwError(err.message);
    }
  }
  get(url: string): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});  
    try {
        return this.http.get<any>(this.baseUrl+url);
    } catch (err) {
        return throwError(err.message);
    }
  }
}