// getCoordinates: function(address, callback) {
//     Rqst.get({
//         url: '//maps.googleapis.com/maps/api/geocode/json?address=' + address + '&sensor=false&language=ru',
//         notBlock: true,
//         success: function(r) {
//             if(r.status != 'OK') {
//                 Notice.messageBox('N', 'Адрес не найден');
//                 return false;
//             }
//             callback(r.results[0].geometry.location);
//         }
//     })
// }



import {Injectable} from '@angular/core';

@Injectable()
export class AutocompleteService {
    getAddress() {
        return ['qwe', 'wer', 'ert'];
    }
}