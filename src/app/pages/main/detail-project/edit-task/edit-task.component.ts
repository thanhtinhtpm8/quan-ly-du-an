import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectDetailService } from '../../../../services/project-detail.service';
import { ProjectService } from '../../../../services/project.service';
import { CommentService } from '../../../../services/comment.service';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, MatIconModule, MatListModule, MatMenuModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit {
  dialogRef: any = inject(MatDialogRef<EditTaskComponent>);
  list_note: any = [];
  title: string = 'Title default';
  description: string = 'Decription default';
  status: any = 1;
  note: string = ''
  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  private projectDetailService:ProjectDetailService,private projectService:ProjectService,private commentService:CommentService) { }
  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    this.status = this.data.status;
    this.load_comment();  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3 * 1000
    });
  }
  send() {
    if (this.note && this.note !== '') {
      let data_comment = {username:localStorage.getItem('username'),fullName:localStorage.getItem('fullName'),content: this.note.replace(/\n/g, '<br>'),idTask:this.data.id,createdAt: new Date()};
      this.list_note.unshift(data_comment);
      
      this.commentService.createComment(data_comment).subscribe((res:any)=>{

      })
      this.note = '';
    }
  }
  delete() {
    this.projectDetailService.delete(this.data.id).subscribe((res:any)=>{
      this.openSnackBar('Xoá thành công');
      this.dialogRef.close({ result: 'success' });
    });
    
  }
  edit_task() {}
  edit_note(data: any) {}
  delete_note(data: any) { }
  convertDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng tính từ 0-11 nên cần +1
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  change_status() {
    this.data.status = Number(this.status);
    this.data.idProject = Number( this.data.idProject)
    this.projectDetailService.updateDetail(this.data.id,this.data).subscribe((res:any)=>{

    })
  }
  load_comment(){
    this.commentService.getAllComment().subscribe((res:any)=>{
        this.list_note =res.filter((user:any) => user.idTask ===  this.data.id);
    })
  }
}
