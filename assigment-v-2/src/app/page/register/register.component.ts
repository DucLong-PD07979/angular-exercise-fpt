import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  registerDataPayload: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      passwordComfirm: [null, Validators.required],
    });
  }

  onRegister() {
    this.registerDataPayload = this.registerForm.getRawValue();
    this.authService.register(this.registerDataPayload).subscribe((result) => {
      if (result.success) {
        this.router.navigate(['login']);
      }
    });
  }
}
