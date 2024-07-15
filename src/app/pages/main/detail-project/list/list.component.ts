import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, AddTaskComponent, EditTaskComponent, MatMenuModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() title: string = 'Title';
  @Input() list_task: any = [];
  @Input() type: number = 1;
  @Output() add_new = new EventEmitter<any>();
  readonly dialog = inject(MatDialog);

  add_task() {
    const dialogRef = this.dialog.open(AddTaskComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.result)
      if (result) {
        this.add_new.emit({type:this.type,data:result.result})
      }
    });
  }
  edit_task(data:any) {
    const dialogRef = this.dialog.open(EditTaskComponent,{data:{title:data.title,description:data.description}});
    dialogRef.afterClosed().subscribe((result: any) => {
      
    });
  }
}
