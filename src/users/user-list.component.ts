import { Component } from '@angular/core';
import { SmartTable, of, SortDirection } from 'smart-table-ng';
import { users, User } from './users';

const providers = [{
  provide: SmartTable, useValue: of<User>(users)
}];

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  providers
})
export class UserListComponent {
}