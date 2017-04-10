import {BrowserModule}        from '@angular/platform-browser';
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {FormsModule}          from '@angular/forms';
import {HttpModule}           from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent}         from './app.component';
import {SearchModule}         from './search/search.module';
import {SearchComponent}      from "./search/search.component";

const appRoutes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: '**', redirectTo: '/search'}
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        SearchModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
