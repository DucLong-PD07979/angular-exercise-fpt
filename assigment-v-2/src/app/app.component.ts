import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSnackBarModule,
    CommonModule,
    LayoutComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
