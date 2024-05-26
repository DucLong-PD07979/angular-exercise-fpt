import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faSort,
  faHouse,
  faMagnifyingGlass,
  faFilter,
  faBell,
  faChevronDown,
  faMugHot,
  faUser,
  faGhost,
} from '@fortawesome/free-solid-svg-icons';
import { LayoutComponent } from '../components/layout/layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    FormsModule,
    FontAwesomeModule,
    LayoutComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
