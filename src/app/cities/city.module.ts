import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CitiesComponent} from './city-list/cities.component';
import {CityDetailComponent} from './city-detail/city-detail.component';

import {CitiesRoutingModule} from './cities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CitiesRoutingModule
  ],
  declarations: [
    CitiesComponent,
    CityDetailComponent
  ]
})
export class CitiesModule {}
