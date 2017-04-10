import { Component} from '@angular/core';
import { SetLocationComponent } from '../search/set-location.component'


@Component({
  selector: 'search-app',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  showPopup: boolean = false;

  showPopupFunc(){
    this.showPopup = true;
  }

  onSaveLocation(){
    this.showPopup = false;
  }



}