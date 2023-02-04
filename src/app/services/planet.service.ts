import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private URL = 'http://localhost:5186/api/Planet';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
      return this.http.get<Planet[]>(this.URL+'/GetPlanets');
  }
}
