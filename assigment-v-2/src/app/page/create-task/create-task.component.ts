import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ProjectServices } from '../../core/services/projects.services';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserServices } from '../../core/services/user.services';
import { AuthService } from '../../core/services/auth.services';
import { CommonModule } from '@angular/common';
import { TaskServices } from '../../core/services/task.services';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent implements OnInit {
  formGroup!: FormGroup;
  taskDataPayload: any = '';
  projectsData: any;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private projectServices: ProjectServices,
    private authServices: AuthService,
    private taskServices: TaskServices
  ) {
    this.user = this.authServices.getDecodedToken();
  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      due_date: [null, Validators.required],
      employerId: [null, Validators.required],
      projectId: [null, Validators.required],
    });
    this.getProjectWithMemberId();
  }

  getProjectWithMemberId() {
    this.projectServices
      .getProjectWithMemberId(this.user.userData._id)
      .subscribe((result) => {
        console.log(result);
        this.projectsData = result.projects;
      });
  }

  createTask() {
    const formData = this.formGroup.getRawValue();
    const userId = this.user.userData._id;
    this.taskDataPayload = { ...formData, employerId: userId };
    this.taskServices.postData(this.taskDataPayload).subscribe((result) => {
      console.log(result);
      if (result.success) {
        this.formGroup.reset();
      }
    });
    console.log(this.taskDataPayload);
  }
}
