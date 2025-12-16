import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Continents} from '../models/continents.model';

@Injectable({
  providedIn: 'root',
})
export class ContinentsService {
  private continentsUrl = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);

  public getAllContinents () : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl);
  }
}
