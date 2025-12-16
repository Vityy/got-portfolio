import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Continents} from '../models/continents.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContinentsService {
  private continentsUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  public getAllContinents () : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl + '/Continents');
  }
}
