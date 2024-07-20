import { Component } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    username:new FormControl(null,
      [
      Validators.required,
      ]),
    password:new FormControl(null)})

  constructor(private router: Router,private authService:AuthService,private _snackBar: MatSnackBar){

  }
  login_click(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res:any)=>{
        let user = res.filter((user:any) => user.username ===  this.loginForm.value.username && user.password === this.loginForm.value.password)[0];
        if(user){
          localStorage.setItem('token','tokenabcdef');
          localStorage.setItem('fullName',user.fullName);
          localStorage.setItem('username',user.username);
          localStorage.setItem('role',user.role);
          this.router.navigate(['home']);
        }else{
          this.openSnackBar('Tên đăng nhập hoặc mật khẩu không chính xác');
        }
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
