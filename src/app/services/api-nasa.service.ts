import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Apod } from '../models/Apod'
import { urls } from 'src/environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiNasaService {

  constructor(private http: HttpClient) {}

  loadApod(date: string): Observable<Apod> {
    let url = urls.nasaBaseUrl + urls.planetaryApi
    url = url.replace('SAMPLE_DATE', date)
    return this.http.get<Apod>(url)
  }
}
