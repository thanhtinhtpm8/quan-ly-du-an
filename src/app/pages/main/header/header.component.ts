import { Component, EventEmitter, Output } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatGridListModule,MatIconModule,MatButtonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  avatar_url: string = 'https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png';
  user_name:string='Trần Văn A';
  logo_url:string='https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png';
  @Output() click_show = new EventEmitter<any>();
  show_click(){
    this.click_show.emit(null);
  }
}
