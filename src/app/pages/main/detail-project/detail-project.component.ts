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
import { ProjectDetailService } from '../../../services/project-detail.service';
import { ProjectService } from '../../../services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, ListComponent, MatMenuModule, MatBottomSheetModule],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss'
})
export class DetailProjectComponent implements OnInit {
  id: any = '';
  constructor(private _bottomSheet: MatBottomSheet,
    private projectDetailService: ProjectDetailService,
    private projectService: ProjectService,
    private route: ActivatedRoute) { }
  color: string = '#3498db';
  title: string = '';
  description: string = '';
  list_user: any = [];
  list_task_todo: any = []
  list_task_doing: any = []
  list_task_done: any = []
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.load_data_prj_infor();
      this.load_data_detail();
    });
  }
  readonly dialog = inject(MatDialog);
  edit_click() {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      data: { name: this.title, color: this.color, description: this.description, list_user: this.list_user ,id:this.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.load_data_prj_infor();
      }
    });
  }
  add_new(data: any) {
    let userCreate = localStorage.getItem('username');
    data.data.userCreate=userCreate;
    data.data.status=data.type;
    if (data.type == 1) {
      this.list_task_todo.push(data.data);
      this.projectDetailService.createDetail({status:1,title:data.data.title,description:data.data.description,idProject:this.id,userCreate}).subscribe((res:any)=>{
        this.load_data_detail();
      })
    }
    if (data.type == 2) {
      this.list_task_doing.push(data.data);
      this.projectDetailService.createDetail({status:2,title:data.data.title,description:data.data.description,idProject:this.id,userCreate}).subscribe((res:any)=>{
        this.load_data_detail();
      })
    } 
    if (data.type == 3){
      this.list_task_done.push(data.data);
      this.projectDetailService.createDetail({status:3,title:data.data.title,description:data.data.description,idProject:this.id,userCreate}).subscribe((res:any)=>{
        this.load_data_detail();
      })
    } 
  }
  view_user() {
    this._bottomSheet.open(ListMemberComponent);
  }
  load_data_prj_infor() {
    this.projectService.getProjectById(this.id).subscribe((res: any) => {
      this.color = res.color;
      this.title = res.title;
      this.description = res.description;
      this.list_user = res.listMember;
    })
  }
  load_data_detail() {
    this.projectDetailService.getAllDetail().subscribe((res: any) => {
      this.list_task_todo = res.filter((item: any) => item.idProject == this.id && item.status == 1);
      this.list_task_doing = res.filter((item: any) => item.idProject == this.id && item.status == 2);
      this.list_task_done = res.filter((item: any) => item.idProject == this.id && item.status == 3);
      console.log(res)
    });
  }
  delete(data:any){
    console.log('loads')
    this.load_data_detail();
  }
}
