import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ListComponent } from './list/list.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectComponent } from '../home/create-project/create-project.component';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ListMemberComponent } from './list-member/list-member.component';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, ListComponent ,MatMenuModule,MatBottomSheetModule],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss'
})
export class DetailProjectComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}
  color: string = '#3498db';
  title: string = 'Quản lý hồ sơ';
  description: string = 'Mô tả quản lý hồ sơ';
  list_user:any=['tinhtt1','thongv'];
  list_task_todo: any = [
    {title:'Phân tích thiết kế',description:'Phân tích thiết kế hệ thống'},
    {title:'Xây dựng giao diện',description:'Phân tích thiết kế giao diện'}
  ]
  list_task_doing: any = [
    {title:'Phân tích thiết kế',description:'Phân tích thiết kế hệ thống'},
  ]
  list_task_done: any = []
  ngOnInit(): void { }
  readonly dialog = inject(MatDialog);
  edit_click() {
    const dialogRef = this.dialog.open(CreateProjectComponent,{
      data: {name:this.title,color:this.color,description:this.description,list_user:this.list_user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
       
      }
    });
  }
  add_new(data:any){
    if(data.type==1) this.list_task_todo.push(data.data);
    if(data.type==2) this.list_task_doing.push(data.data);
    if(data.type==3) this.list_task_done.push(data.data);
  }
  view_user(){
    this._bottomSheet.open(ListMemberComponent);
  }
}
