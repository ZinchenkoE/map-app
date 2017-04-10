import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {FormsModule}          from '@angular/forms';
import {HttpModule}           from '@angular/http';
import {AgmCoreModule}        from 'angular2-google-maps/core';
import {SetLocationComponent} from './set-location.component';
import {SearchComponent}      from "./search.component"

@NgModule({
    declarations: [
        SearchComponent,
        SetLocationComponent,
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBbXvB4E7d79eFfdg9jayJ29kSILNEygSM'
        })
    ],
    providers: [],
    bootstrap: [SearchComponent]
})
export class SearchModule {
}
