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

	constructor(private autocompleteService: AutocompleteService) {
		this.onSaveLocation = new EventEmitter<any>();
	}

	ngOnInit() {
		this.latCenter = this.lat || 50.015702;
		this.lngCenter = this.lng || 36.220385;
	}

	getMyLocation() {
		if (navigator.geolocation) {
			this.latCenter = 0;
			this.lngCenter = 0;
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
		if (!this.search) return;
		this.autocompleteService.getAddress(this.search)
			.subscribe((res) => {
				if (res.json().status === 'OK') this.addressArray = res.json().results;
			});
	}

	clickAutocompleteItem(lat, lng) {
		this.lat = this.latCenter = lat;
		this.lng = this.lngCenter = lng;
		this.addressArray = [];
	}
}