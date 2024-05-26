import { Component } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sider-bar',
  standalone: true,
  templateUrl: './sider-bar.component.html',
  styleUrl: './sider-bar.component.css',
  imports: [FontAwesomeModule, RouterLink, CommonModule],
})
export class SiderBarComponent {
  faUser = faUser;
  faGhost = faGhost;
  faMugHot = faMugHot;
  faCoffee = faCoffee;
  faSort = faSort;
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;
  faBell = faBell;
  faChevronDown = faChevronDown;

  menuListData = [
    {
      label: 'Home',
      path: '',
      icon: faHouse,
    },
    {
      label: 'Product',
      path: 'product',
      icon: faMugHot,
    },
    {
      label: 'Contact',
      path: 'contact',
      icon: faSort,
    },
    {
      label: 'Bill',
      path: 'bill',
      icon: faUser,
    },
    {
      label: 'Client',
      path: 'client',
      icon: faGhost,
    },
  ];
}
