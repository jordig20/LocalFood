import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private _http: HttpClient,
  ) {
  }


  get(url: string, showLoader: boolean = true): Observable<any | void> {
    return this.doCallWithHeaders(null, this.getApi() + url).pipe(
      mergeMap((h: any) => this._http.get(h.url, h.headers)),
      mergeMap((r: any) => {
        return of(r);
      }),
      catchError(e => {
        return throwError(e);
      }),
    );
  }

  post(url: string, model: any): Observable<any | void> {
    return this.doCallWithHeaders(model, this.getApi() + url).pipe(
      mergeMap((h: any) => this._http.post(h.url, h.payload, h.headers)),
      mergeMap((r: any) => {
        return of(r);
      }),
      catchError(e => {
        return throwError(e);
      }),
    );
  }

  patch(url: string, model: any): Observable<any | void> {
    return this.doCallWithHeaders(model, this.getApi() + url).pipe(
      mergeMap((h: any) => this._http.patch(h.url, h.payload, h.headers)),
      mergeMap((r: any) => {
        return of(r);
      }),
      catchError(e => {
        return throwError(e);
      }),
    );
  }

  put(url: string, model: any): Observable<any | void> {
    return this.doCallWithHeaders(model, this.getApi() + url).pipe(
      mergeMap((h: any) => this._http.put(h.url, h.payload, h.headers)),
      mergeMap((r: any) => {
        return of(r);
      }),
      catchError(e => {
        return throwError(e);
      }),
    );
  }

  delete(url: string, showLoader: boolean = true): Observable<any | void> {

    return this.doCallWithHeaders(null, this.getApi() + url).pipe(
      mergeMap((h: any) => this._http.delete(h.url, h.headers)),
      mergeMap((r: any) => {
        return of(r);
      }),
      catchError(e => {
        return throwError(e);
      }),
    );
  }

  private doCallWithHeaders(data: any, url: string): Observable<any> {
    const jwt: any = localStorage.getItem('jwt');

    if (jwt) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'authorization': jwt || 'no-jwt',
        }),
      };
      return of({ headers: httpOptions, payload: data, url: url });
    }
  }

  private getApi(): string {
    return 'http://localhost:4200';
  }
}
