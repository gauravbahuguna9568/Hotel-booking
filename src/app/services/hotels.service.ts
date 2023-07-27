import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { Hotels } from '../hotels.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private static baseUrl="http://localhost:3000";
  hotelBooking : Customer[]=[];
  hotel: Hotels[]=[];

  constructor(private http: HttpClient ) { }
  //This is for registering the user 
  customerRegister(customerReg: Customer){
    this.http.post(HotelsService.baseUrl + "/customer",customerReg).subscribe(data=> data=customerReg);
  }
  updateCustomerDetail(customerReg: Customer){
    this.http.put(HotelsService.baseUrl+"/customer/", +customerReg.customerId ).subscribe(data=> data = customerReg );
  }
  list(){
    return this.http.get<Customer[]>(HotelsService.baseUrl+"/customer/");
}
removeBooking(id:number){
  this.http.delete(HotelsService.baseUrl + "/customer/"+id).subscribe();
}

searchByCity(city:string){
  return this.http.get<Hotels[]>(HotelsService.baseUrl+"/hotel?city="+city);

}
}
