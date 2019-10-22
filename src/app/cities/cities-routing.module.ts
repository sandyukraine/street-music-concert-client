import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CitiesComponent} from './city-list/cities.component';
import {CityDetailComponent} from './city-detail/city-detail.component';

const citiesRoutes: Routes = [
  { path: 'cities', component: CitiesComponent},
  { path: 'city/:id', component: CityDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(citiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CitiesRoutingModule {}
