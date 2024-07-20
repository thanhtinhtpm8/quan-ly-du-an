import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'https://6698c7852069c438cd6ff4b1.mockapi.io/comment';
  constructor(private httpService: HttpClient) { }
  getAllComment() {
    return this.httpService.get(this.url);
  }
  getCommentById(id: string) {
    return this.httpService.get(this.url + "/" + id);
  }
  createComment(data:any) {
    return this.httpService.post(this.url ,data);
  }
  updateComment(id:string,data:any){
    return this.httpService.put(this.url + "/" + id ,data);
  }
}
