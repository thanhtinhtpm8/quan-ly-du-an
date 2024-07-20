import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,MatIconModule,MatButtonModule,MatSidenavModule, MatFormFieldModule, MatSelectModule,MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router,){

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
