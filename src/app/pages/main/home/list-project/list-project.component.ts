import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [MatIconModule, ProjectItemComponent, MatDialogModule,CreateProjectComponent],
  templateUrl: './list-project.component.html',
  styleUrl: './list-project.component.scss'
})
export class ListProjectComponent {
  @Input() is_add_new: boolean = false;
  @Input() list_project: any = [];

  readonly dialog = inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(CreateProjectComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.list_project.push({
          id:this.list_project.length+1,
          color:result.data.color,
          title:result.data.title,
          date_created:''
        })
      }
    });
  }
}
