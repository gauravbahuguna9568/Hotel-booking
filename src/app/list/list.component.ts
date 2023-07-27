import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
hotelBookings: Customer[]=[];
constructor(private service : HotelsService, private router: Router, private route: ActivatedRoute){

}
ngOnInit():void{
  this.service.listHotels().subscribe(data => this.hotelBookings=data);
}

} 
