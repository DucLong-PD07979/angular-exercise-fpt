import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ProjectServices } from '../../core/services/projects.services';
import { AuthService } from '../../core/services/auth.services';
import { formatDateToVietnamese } from '../../core/util/formatDate';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink, MatCardModule, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  user: any;
  formatDate = formatDateToVietnamese;
  constructor(
    private projectService: ProjectServices,
    private authServices: AuthService
  ) {
    this.user = this.authServices.getDecodedToken();
  }

  projectData: any = [];
  projectFetch() {
    const userId = this.user.userData._id;
    this.projectService.getAllProjectWithOwer(userId).subscribe((result) => {
      console.log(result);
      this.projectData = result.projectsData;
    });
  }

  ngOnInit(): void {
    this.projectFetch();
  }
}
