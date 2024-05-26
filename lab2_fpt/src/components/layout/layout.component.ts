import { Component } from '@angular/core';
import { SiderBarComponent } from '../sider-bar/sider-bar.component';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SiderBarComponent,
    ContentComponent,
    FontAwesomeModule,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  faBell = faBell;
  faUser = faUser;
  faMugHot = faMugHot;
  faChevronDown = faChevronDown;

}
