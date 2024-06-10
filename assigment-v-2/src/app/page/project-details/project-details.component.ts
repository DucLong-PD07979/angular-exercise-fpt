import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.services';
import { UserServices } from '../../core/services/user.services';
import { ProjectServices } from '../../core/services/projects.services';
import { formatDateToVietnamese } from '../../core/util/formatDate';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TaskServices } from '../../core/services/task.services';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent implements OnInit {
  projectData: any;
  slugPram?: string | null;
  user?: any;
  memberList: any;
  taskData: any;
  formatDate = formatDateToVietnamese;
  constructor(
    private authServices: AuthService,
    private userServices: UserServices,
    private projectServices: ProjectServices,
    private taskServices: TaskServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.authServices.getDecodedToken();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slugPram = params.get('slug');
    });
    this.getDataProject();
  }

  getDataProject() {
    this.projectServices
      .getProjectWithSlug(this.slugPram)
      .subscribe((result) => {
        this.projectData = result.projectsData;
        this.getMemberJoinToProject(this.projectData[0].memberList.join(','));
        this.getTaskWithProjectId(this.projectData[0]._id);
      });
  }

  getMemberJoinToProject(listIdMember: string[]) {
    this.userServices.getMemberWithId(listIdMember).subscribe((result) => {
      this.memberList = result.userData;
    });
  }

  deleteProject(id: string) {
    this.projectServices.delete(id).subscribe((result) => {
      if (result.success) {
        this.router.navigate(['projects-of-you']);
      }
    });
  }

  getTaskWithProjectId(id: string) {
    this.taskServices.getTaskWithIdProject(id).subscribe((result) => {
      console.log(result);
      if (result.success) {
        this.taskData = result.taskData;
      }
    });
  }
}
