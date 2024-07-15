import { Component } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user_name:string='';
  password:string='';
  constructor(private router: Router,){

  }
  login_click(){
     // if(this.user_name&&this.password){
        this.router.navigate(['home'])
    //  }
  }
}
