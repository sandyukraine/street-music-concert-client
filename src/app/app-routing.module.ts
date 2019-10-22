import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CitiesComponent} from './cities/city-list/cities.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'cities', component: CitiesComponent},
  {path: '', redirectTo: '/cities', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
