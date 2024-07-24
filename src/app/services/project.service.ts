import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'https://6693503bc6be000fa07abc56.mockapi.io/project';
  constructor(private httpService: HttpClient) { }
  getAllProject() {
    return this.httpService.get(this.url);
  }
  getProjectById(id: string) {
    return this.httpService.get(this.url + "/" + id);
  }
  createProject(data:any) {
    return this.httpService.post(this.url ,data);
  }
  updateProject(id:string,data:any){
    return this.httpService.put(this.url + "/" + id ,data);
  }
  search(key:string){
    return this.httpService.get(this.url + "?title="+key);
  }
}
