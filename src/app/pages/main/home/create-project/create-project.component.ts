import { Component, EventEmitter, Inject, inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent implements OnInit {
  dialogRef: any = inject(MatDialogRef<CreateProjectComponent>);
  name: string = '';
  description: string = '';
  select_color: any='#3498db';
  list_user: any = ['tinhtt1', 'thongv', 'hoavv', 'dungnt', 'tuyenbtt'];
  list_user_select: any;
  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    if(this.data){
      this.name=this.data.name;
      this.description=this.data.description;
      this.select_color=this.data.color;
      this.list_user_select=this.data.list_user;
    }
  }
  submit() {
    if (this.name && this.description && this.list_user_select) {
      this.openSnackBar('Tạo dự án thành công');
      let data={name:this.name,description:this.description,color:this.select_color,list_user_select:this.list_user_select}
      this.dialogRef.close({data:data});
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration:3*1000
    });
  }

}
