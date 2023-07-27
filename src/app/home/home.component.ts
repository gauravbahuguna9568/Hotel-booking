import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hotel : Hotels[]=[];
  cities: string[]=["Pune","Bareilly"];
  city: string="";
  constructor(private service: HotelsService, private router: Router) {}
  search() {
    this.service.searchByCity(this.city).subscribe(data => {
      this.hotel = data;
      this.navigateToResultPage();
    });
  }
  navigateToResultPage() {
    this.router.navigate(['/search-result'], { state: { hotel: this.hotel } });
  }
}
