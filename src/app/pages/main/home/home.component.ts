import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectItemComponent } from './project-item/project-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectService } from '../../../services/project.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, ProjectItemComponent, MatIconModule, ListProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.load_data()
  }
  load_data() {
    this.projectService.getAllProject().subscribe((res: any) => {
      this.list_project=res;
      console.log(res)
    })
  }
  list_project: any = [];

  list_guest_project: any = []

}
