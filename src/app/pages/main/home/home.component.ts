import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectItemComponent } from './project-item/project-item.component';
import {MatIconModule} from '@angular/material/icon';
import { ListProjectComponent } from './list-project/list-project.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,ProjectItemComponent,MatIconModule,ListProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  list_project:any=[
    {
      id:1,
      color:'red',
      title:'Travel-app',
      date_created:''
    },
    {
      id:2,
      color:'#3498db',
      title:'Quản lý hồ sơ',
      date_created:''
    },
    ];

    list_guest_project:any=[{
      id:3,
      color:'#3498db',
      title:'Quản lý File',
      date_created:''
    },
    {
      id:3,
      color:'#000000',
      title:'Quản lý kế hoạch',
      date_created:''
    },
  ]

}
