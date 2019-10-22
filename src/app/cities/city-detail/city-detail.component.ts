import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';

import {CityService}  from '../city.service';
import {City} from '../city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city$: Observable<City>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.city$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cityService.getCity(params.get('id')))
    );
  }

  gotoCities(city: City) {
    let cityId = city ? city.id : null;
    this.router.navigate(['/cities', {id: cityId}]);
  }
}
