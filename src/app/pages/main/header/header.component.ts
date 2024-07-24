import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';
import { debounceTime, Subject } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatGridListModule,MatIconModule,MatButtonModule,MatMenuModule,NgIf,FormsModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  avatar_url: string = 'https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png';
  user_name:any=localStorage.getItem('fullName');
  logo_url:string='https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png';
  list_result:any=[];
  key_search:any='';
  @Output() click_show = new EventEmitter<any>();
  search_status:boolean =false;
  searchSubject: Subject<string> = new Subject<string>();
  constructor(private router: Router,private projectService:ProjectService){

  }
  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300) // Wait for 300ms pause in events
    ).subscribe(searchTerm => {
      this.loadDataSearch(searchTerm);
    });
  }
  show_click(){
    this.click_show.emit(null);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
  change(){
    console.log(this.key_search)
    this.searchSubject.next(this.key_search);
    this.search_status=true;
  }
  onBlur(){
    setTimeout(() => {
      this.key_search='';
      this.search_status=false;
    }, 100);
  }
  loadDataSearch(key:any){
    this.projectService.search(key).subscribe((res:any)=>{
      this.list_result=res;
    })
  }
  click_item(id:any) {
    this.router.navigate([`detail`], { queryParams: { id: id } })
  }
}
