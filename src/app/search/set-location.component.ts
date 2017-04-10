import { Component, EventEmitter, Input, Output } from '@angular/core';
// import {AutocompleteService} from '../services/autocomplete.service';
// import { AgmCoreModule }        from 'angular2-google-maps/core';

@Component({
    selector: 'set-location',
    templateUrl: './set-location.component.html',
    styleUrls: ['./set-location.component.css'],
})
export class SetLocationComponent  {
    lat: number = 50.015702;
    lng: number = 36.220385;

    @Output() onSaveLocation: EventEmitter<boolean>;

    // constructor(private _autocompleteService: AutocompleteService) { }
    constructor() {
        this.onSaveLocation = new EventEmitter<boolean>();
    }

    getMyLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
    }

    saveLocation(){
        this.onSaveLocation.emit()
    }

    setPosition(position){
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat, this.lng);
    }

    mapClick(q){
        console.log(this);
    }
}