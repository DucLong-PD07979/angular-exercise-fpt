import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProjectServices } from '../../core/services/projects.services';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserServices } from '../../core/services/user.services';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css',
})
export class CreateProjectComponent implements OnInit {
  formGroup!: FormGroup;
  projectDataPayload: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private projectServices: ProjectServices,
    private userServices: UserServices,
    private snackBar: MatSnackBar
  ) {}
  displayedColumns: string[] = ['position', 'email', 'select'];
  userMemberData: any = [];
  userMembershipDataFetch() {
    this.userServices.getUserRoleMembership().subscribe((result) => {
      this.userMemberData = result.userData;
    });
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      dateStart: [null, Validators.required],
      dateEnd: [null, Validators.required],
      totalCosts: [null, Validators.required],
      totalTask: [null, Validators.required],
      memberList: [[], Validators.required],
    });
    this.userMembershipDataFetch();
  }

  selectOption(option: any) {
    const value = option.source.value;
    const checked = option.checked;
    const checkValues: string[] = this.formGroup.get('memberList')?.value || [];
    if (checked) {
      checkValues.push(value);
    } else {
      const index = checkValues.indexOf(value);
      checkValues.splice(index, 1);
    }

    this.formGroup.get('memberList')?.setValue(checkValues);
  }

  createForm() {
    this.projectDataPayload = JSON.stringify(this.formGroup.getRawValue());
    const owner = '665f1be63ccf372f86a951ab';
    const data = {
      ...this.formGroup.getRawValue(),
      owner,
    };
    this.projectServices.postData(data).subscribe((result) => {
      if (result.success) {
        this.formGroup.reset();
        this.snackBar.open(result.message, 'Close', {
          duration: 5000,
        });
      }
    });
  }
}
