import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {
  url = 'https://6698c7852069c438cd6ff4b1.mockapi.io/project_detail';
  constructor(private httpService: HttpClient) { }
  getAllDetail() {
    return this.httpService.get(this.url);
  }
  createDetail(data:any) {
    return this.httpService.post(this.url ,data);
  }
  delete(id:any) {
    return this.httpService.delete(this.url +"/"+id);
  }
  updateDetail(id:string,data:any) {
    return this.httpService.put(this.url+"/"+id ,data);
  }
}
