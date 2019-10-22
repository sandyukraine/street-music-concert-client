import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {City} from './city';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>('//localhost:8080/cities');
  }

  getCity(id: string | string) {
    return this.getCities().pipe(
      map((cities: City[]) => cities.find(city => city.id === id))
    );
  }
}
