import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TdisplayService {

  datau = 'https://www.cdc.gov/coronavirus/2019-ncov/map-data-cases.csv'

  constructor(private http: HttpClient) { }

  retrieve() {
    return this.http.get(this.datau, {responseType: 'text'})
  }
}
