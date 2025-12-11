import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Continents } from '../models/continents.model';

@Injectable({
  providedIn: 'root',
})
export class Continent {
  private continentUrl: string = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);

  getContinents(): Observable<Continents[]>{
    return this.httpClient.get<Continents[]>(this.continentUrl);
  }
}
