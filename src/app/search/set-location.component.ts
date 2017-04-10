import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {AutocompleteService} from './autocomplete.service';

@Component({
    selector: 'set-location',
    templateUrl: './set-location.component.html',
    styleUrls: ['./set-location.component.css'],
    providers: [AutocompleteService],
})
export class SetLocationComponent implements OnInit {
    @Input() lat: number;
    @Input() lng: number;

    @Output() onSaveLocation: EventEmitter<any>;

    latCenter: number;
    lngCenter: number;

    addressArray = [];

    search: string;

    constructor(private _autocompleteService: AutocompleteService) {
        this.onSaveLocation = new EventEmitter<any>();
    }

    ngOnInit() {
        this.latCenter = this.lat || 50.015702;
        this.lngCenter = this.lng || 36.220385;
    }

    getMyLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
    }

    saveLocation() {
        let lat: number = this.lat;
        let lng: number = this.lng;
        this.onSaveLocation.emit({lat, lng});
    }

    setPosition(position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.latCenter = position.coords.latitude;
        this.lngCenter = position.coords.longitude;
    }

    mapClick($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
    }

    searchAddress() {
        this._autocompleteService.getAddress(this.search, this.setAddressArray.bind(this));
    }

    setAddressArray(res) {
        this.addressArray = res;
    }

    clickAutocompleteItem($event) {
        this.lat = +$event.target.dataset.lat;
        this.lng = +$event.target.dataset.lng;
        this.addressArray = [];
    }
}