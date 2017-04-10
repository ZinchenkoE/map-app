import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';

@Injectable()
export class AutocompleteService {

    constructor(private http: Http) {}

    getAddress(address: string, callback) {
        this.http.get('//maps.googleapis.com/maps/api/geocode/json?address=' + address + '&sensor=false&language=ru')
            .subscribe(function (res) {
                if(res.json().status === 'OK') callback(res.json().results);
            });
    }

}