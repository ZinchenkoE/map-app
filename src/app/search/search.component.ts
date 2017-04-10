import {Component} from '@angular/core';

@Component({
    selector: 'search-app',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    showPopup: boolean = false;
    lat: number;
    lng: number;

    showPopupFunc() {
        this.showPopup = true;
    }

    onSaveLocation($event) {
        this.showPopup = false;
        this.lat = $event.lat;
        this.lng = $event.lng;
    }

}