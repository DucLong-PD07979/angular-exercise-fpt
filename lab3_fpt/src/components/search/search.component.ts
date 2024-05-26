import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  @Output() searchValue = new EventEmitter<string>();
  value: string = '';
  handleSearch = (event: any) => {
    this.value = event.target.value;
    this.searchValue.emit(this.value);
  };
}

const currentUser = {
  id: 79710,
  tracking_hash: 'c0d31402ec175ec9b8409d66bbfa9c6e',
  email: '25nguyenduclong@gmail.com',
  first_name: 'Long',
  last_name: 'Nguyen',
  full_name: 'Long Nguyen',
  username: 'long-nguyen-119',
  avatar_url:
    'https://avatar-redirect.appspot.com/google/106636249561205605767?size=400',
  is_authenticated: true,
  is_onboarding_completed: true,
  is_learn_tour_completed: true,
  is_blocked: false,
  is_comment_blocked: false,
  is_pro: false,
  is_admin: false,
  is_affiliate: false,
  is_phone_required: true,
  private_channel: 'App.Common.Models.User.79710',
  logout_channel: 'Logout.9c199f2a-f6e2-4389-92d3-24a8b5c9e596',
  permissions: [],
  local_sync: null,
  blocked_at: null,
  comment_blocked_at: null,
  last_edited_document_id: '9bff14fd-111a-4550-9116-734bb5d1569b',
};

