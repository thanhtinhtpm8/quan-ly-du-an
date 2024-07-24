import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-user-manager',
  standalone: true,
  imports: [],
  templateUrl: './user-manager.component.html',
  styleUrl: './user-manager.component.scss'
})
export class UserManagerComponent implements OnInit {
  list_user:any=[]
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.userService.getAllUser().subscribe((res:any)=>{
      this.list_user =res;
    })
  }
  readonly dialog = inject(MatDialog);
  add_user(){
    const dialogRef = this.dialog.open(AddEditUserComponent,{width:'80vh'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
      }
    });
  }
  edit_user(data:any){
    const dialogRef = this.dialog.open(AddEditUserComponent,{data:data,width:'80vh'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
      }
    });
  }

}
