import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TdisplayService {

  datau = 'https://data.cdc.gov/api/views/9mfq-cb36/rows.csv'

  constructor(private http: HttpClient) { }

  retrieve() {
    return this.http.get(this.datau, {responseType: 'text'})
  }
}
