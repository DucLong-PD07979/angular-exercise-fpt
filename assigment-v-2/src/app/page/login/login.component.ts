import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginPayload: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onLogin() {
    this.loginPayload = this.loginForm.getRawValue();
    this.authService.login(this.loginPayload).subscribe((result) => {
      if (result.success)
      localStorage.setItem('accessToken', result.accessToken);
      window.location.href = 'http://localhost:4200';
    });
  }
}
