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
  note: string = ''
  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    console.log(this.description)
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3 * 1000
    });
  }
  send() {
    if (this.note && this.note !== '') {
      this.list_note.unshift({ user: 'tinhtt1', content: this.note.replace(/\n/g, '<br>'),time_create:new Date() })
      this.note = '';
    }
  }
  delete() {
    this.openSnackBar('Xoá dự án thành công');
  }
  edit_task() {

  }
  edit_note(data:any){

  }
  delete_note(data:any){}
  convertDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng tính từ 0-11 nên cần +1
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
}
