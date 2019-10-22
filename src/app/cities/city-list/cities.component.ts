import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CityService} from '../city.service';
import {City} from '../city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities$: Observable<City[]>;
  selectedId: string;

  constructor(private cityService: CityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cities$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.cityService.getCities();
      })
    )
  }
}
