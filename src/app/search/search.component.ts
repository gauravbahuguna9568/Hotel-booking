import { Component } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { Hotels } from '../hotels.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  hotel : Hotels[]=[];
  cities: string[]=["Pune","Bareilly"];
  city: string="";


constructor(private service: HotelsService){}

  search(){
    this.service.searchByCity(this.city).subscribe(data => this.hotel = data);
  }

}
