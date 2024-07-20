import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://6693503bc6be000fa07abc56.mockapi.io/user';
  constructor(private httpService: HttpClient) { }
  login(data: any) {
    return this.httpService.get(this.url);
  }
  getAllUser(){
    return this.httpService.get(this.url);
  }
}
