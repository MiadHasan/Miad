import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClint: HttpClient) {}
  getData() : Observable<any> {
    let url = 'https://api.publicapis.org/entries';
    return this.httpClint.request('GET', url, {responseType: 'json'})
  }
}