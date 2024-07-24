import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [MatDialogModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss'
})
export class AddEditUserComponent {
  dialogRef: any = inject(MatDialogRef<AddEditUserComponent>);
  folderName: string = '';
  edit_form = new FormGroup({
    username: new FormControl(this.data?.username,[Validators.required,]),
    fullName: new FormControl(this.data?.fullName,[Validators.required,]),
    password: new FormControl(this.data?.password,[Validators.required,]),
    role: new FormControl(this.data?.role,[Validators.required,]),
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private userService:UserService) { }
  onSubmit(){
    console.log(this.edit_form.value);
    if(this.edit_form.valid&&!this.data){
      this.userService.addUser(this.edit_form.value).subscribe((res:any)=>{
        this.dialogRef.close({ data: res.id });
      })
    }
    if(this.edit_form.valid&&this.data){
      this.userService.updateUser(this.data.id,this.edit_form.value).subscribe((res:any)=>{
        this.dialogRef.close({ data: this.data.id });
      })
    }
  }
}
