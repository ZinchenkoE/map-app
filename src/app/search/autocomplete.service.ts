import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';

@Injectable()
export class AutocompleteService {

	constructor(private http: Http) {}

	getAddress(address: string): Observable<any> {
		return this.http.get('//maps.googleapis.com/maps/api/geocode/json?address=' + address + '&sensor=false&language=ru')
			.catch((err) => {
				console.error(err);
				return err;
			});
	}

}