import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://6693503bc6be000fa07abc56.mockapi.io/user';
  constructor(private httpService: HttpClient) { }

  getAllUser(){
    return this.httpService.get(this.url);
  }
  getUserById(id:string){
    return this.httpService.get(this.url+"/"+id);
  }
  addUser(data:any){
    return this.httpService.post(this.url,data);
  }
  updateUser(id:string,data:any){
    return this.httpService.put(this.url+"/"+id,data);
  }
}
