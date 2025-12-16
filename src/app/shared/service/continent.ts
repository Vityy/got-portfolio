import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Continents } from '../models/continents.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Continent {
  private continentUrl: string = environment.apiUrl;
  private httpClient = inject(HttpClient);

  getContinents(): Observable<Continents[]>{
    return this.httpClient.get<Continents[]>(this.continentUrl + '/Continents');
  }
}
