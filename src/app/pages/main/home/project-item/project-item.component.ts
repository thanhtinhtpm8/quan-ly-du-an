import { Component, inject, input, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() color: string = ''
  @Input() title: string = ''
  @Input() id: any = null;
  constructor(private router: Router,) {

  }

  click_item() {
    this.router.navigate([`detail`], { queryParams: { id: this.id } })
  }
  
}
