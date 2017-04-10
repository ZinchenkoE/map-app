import { Component } from '@angular/core';
import {AutocompleteService} from '../services/autocomplete.service';

@Component({
    selector: 'set-location',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class SetLocationComponent {
    lat: number = 50.015702;
    lng: number = 36.220385;

    constructor(private _autocompleteService: AutocompleteService) { }
}