import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TdisplayService {

  datau = 'http://geck.ooo/customers.csv'

  constructor(private http: HttpClient) { }

  retrieve() {
    return this.http.get(this.datau, {responseType: 'text'})
  }
}
