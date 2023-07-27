import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  hotel : Hotels[]=[];
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const state = window.history.state;
    if (state && state.hotel) {
      this.hotel = state.hotel;
    }
  }


}
