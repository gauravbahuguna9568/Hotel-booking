import { Component } from '@angular/core';
import { Hotels } from '../hotels.model';
import { HotelsService } from '../services/hotels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  hotel : Hotels[]=[];

  constructor(private service: HotelsService, private router : Router){

  }

  ngOnInit(): void{
    this.service.list().subscribe(data=>this.hotel=data);
  }


}
