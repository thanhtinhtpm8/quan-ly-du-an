import { Component, EventEmitter, Inject, inject, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth.service';
import { ProjectService } from '../../../../services/project.service';
@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit, OnChanges {
  dialogRef: any = inject(MatDialogRef<CreateProjectComponent>);
  name: string = '';
  description: string = '';
  select_color: any = '#3498db';
  list_user: any = ['tinhtt1', 'thongv', 'hoavv', 'dungnt', 'tuyenbtt'];
  list_user_select: any=[];
  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private projectService: ProjectService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.load_users();
    if (this.data) {
      this.name = this.data.name;
      this.description = this.data.description;
      this.select_color = this.data.color;
    }
  }
  load_users() {
    this.authService.getAllUser().subscribe((res: any) => {
      this.list_user = res.map((item: any) => item.username);
      if(this.data){
        if(this.data.list_user.length)
        this.list_user_select = this.data.list_user!;
      }
    })
  }
  submit() {
    if (this.name && this.description && this.list_user_select) {
      let data = { title: this.name, description: this.description, color: this.select_color, listMember: this.list_user_select, userCreate: localStorage.getItem('username') }
      if(this.data){
        this.projectService.updateProject(this.data.id,data).subscribe((res: any) => {
          this.openSnackBar('Update dự án thành công');
          this.dialogRef.close({ data: data });
        });
      }else
      this.projectService.createProject(data).subscribe((res: any) => {
        this.openSnackBar('Tạo dự án thành công');
        this.dialogRef.close({ data: data });
      });
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3 * 1000
    });
  }

}
