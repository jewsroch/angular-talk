import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class InstagramService {
  private url: string;

  constructor(private http: Http) {
    this.url = '/api';
  }

  fetch(): Observable<any> {
    return this.http.get(this.url)
               .map(res => res.json().data)
               .catch(this.handleError);
  }

  private handleError (error: any): Observable<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
