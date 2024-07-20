import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  dialogRef: any = inject(MatDialogRef<AddTaskComponent>);
  title: string = '';
  description: string = '';
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3 * 1000
    });
  }
  add_new_click() {
    if (this.title && this.description) {
      let data = { title: this.title, description: this.description }
      this.dialogRef.close({ result: data });
      
    }
  }
}
