import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent {
  hotelDetails: Hotels = new Hotels();
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.hotelDetails = params['hotelDetails'];
    });
  }

}
