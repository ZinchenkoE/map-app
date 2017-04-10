// import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
// import { CommonModule }  from '@angular/common';
// import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { SetLocationComponent }  from './set-location.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    SetLocationComponent
  ],
  imports: [
    // BrowserModule,
    // CommonModule,
    // FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbXvB4E7d79eFfdg9jayJ29kSILNEygSM'
    })
  ],
  providers: [],
  bootstrap: [SetLocationComponent]
})
export class SearchModule { }
