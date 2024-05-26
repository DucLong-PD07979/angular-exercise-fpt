import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons';
import { CardsComponent } from '../cards/cards.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FontAwesomeModule, CardsComponent, SearchComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  name = 'Nguyen Văn B';
  faFilter = faFilter;

  value: string = '';
  handleGetValueSearch = (text: any) => {
    this.value = text;
  };
}
