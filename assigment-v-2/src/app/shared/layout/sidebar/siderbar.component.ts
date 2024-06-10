import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css',
})
export class SiderbarComponent {
  pathRoutes = [
    {
      label: 'Dashboard',
      path: '',
    },
    {
      label: 'Projects of you',
      path: 'projects-of-you',
    },
    {
      label: 'Users',
      path: 'users',
    },
    {
      label: 'Email',
      path: 'email',
    },
  ];
}
