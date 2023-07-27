import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  hotel : Hotels[]=[];
  cities: string[]=["Pune","Bareilly"];
  city: string="";
  constructor(private service: HotelsService){}

  search(){
    this.service.searchByCity(this.city).subscribe(data => this.hotel = data);
  }


}
