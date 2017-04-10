import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// import { SearchModule }         from './search/search.module';
import { AgmCoreModule }        from 'angular2-google-maps/core';

import { AppComponent }         from './app.component';
import { SearchComponent }      from "./search/search.component";
import { SetLocationComponent } from "./search/set-location.component";

const appRoutes: Routes =[
  { path: 'search', component: SearchComponent},
  { path: '**', redirectTo: '/search'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SetLocationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    // SearchModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbXvB4E7d79eFfdg9jayJ29kSILNEygSM'
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
