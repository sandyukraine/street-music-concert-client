import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CitiesModule} from './cities/city.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CitiesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
