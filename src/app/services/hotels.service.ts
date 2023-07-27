import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private static baseUrl="http://localhost:3000";
  hotelBooking : Customer[]=[];

  constructor(private http: HttpClient ) { }
  //This is for registering the user 
  customerRegister(customerReg: Customer){
    this.http.post(HotelsService.baseUrl + "/customer",customerReg).subscribe(data=> data=customerReg);
  }
  update(customerReg: Customer){
    this.http.put(HotelsService.baseUrl+"/customer/", +customerReg.customerId ).subscribe(data=> data = customerReg );
  }
  list(){
    return this.http.get<Customer[]>(HotelsService.baseUrl+"/customer/");
}
remove(id:number){
  this.http.delete(HotelsService.baseUrl + "/customer/"+id).subscribe();
}
searchByCity(){

}
}
