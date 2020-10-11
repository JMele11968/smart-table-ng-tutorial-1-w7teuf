import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {UsersModule} from '../users/users.module';
import {SmartTableModule} from 'smart-table-ng';

console.log(SmartTableModule);

@NgModule({
  imports:      [ BrowserModule, FormsModule, SmartTableModule, UsersModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

console.log(AppModule);