import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Planet } from '../models/planet';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private URL = 'http://localhost:5186/api/Planet';
  

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
      return this.http.get<Planet[]>(this.URL+'/GetPlanets');
  }

  updatePlanet(planetForm: FormGroup): void {
    var formData: any = new FormData();
    formData.append('Id', planetForm.get('id')!.value);
    formData.append('Name', planetForm.get('name')!.value);
    formData.append('Description', planetForm.get('description')!.value);
    formData.append('Status', planetForm.get('status')!.value);
    formData.append('TeamId', planetForm.get('teamId')!.value);
    formData.append('TeamDto', planetForm.get('teamDto')!.value);

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    this.http
        .put(this.URL+'/UpdatePlanet', formData, httpOptions)
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error)
        })
  }
}
