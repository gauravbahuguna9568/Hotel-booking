import { Component } from '@angular/core';
import { Bookings } from '../booking.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  bookings:Bookings[]=[];

  constructor(private service:HotelsService,private router:Router){}

  ngOnInit():void{
    this.service.list().subscribe(data=>this.bookings);
  }
  

}
