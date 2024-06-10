import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: any;
  constructor(private router: Router, private authServices: AuthService) {
    this.user = this.authServices.getDecodedToken();
  }
  getRoleUserLeader() {
    if (this.user.userData.role.includes('LEADER')) {
      return true;
    }
    return false;
  }

  navigateToCreateProjectPage() {
    this.router.navigate(['create-project']);
  }
  navigateToCreateTask() {
    this.router.navigate(['create-task']);
  }

  onLogout() {
    this.authServices.logout();
    window.location.href = 'http://localhost:4200/login';
  }
}
