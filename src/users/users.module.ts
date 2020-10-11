import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { SmartTableModule } from 'smart-table-ng';

@NgModule({
  imports: [CommonModule, SmartTableModule],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UsersModule {
}
