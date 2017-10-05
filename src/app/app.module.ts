import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AllRemindersComponent } from './all-reminders.component';
import { ReminderDetailComponent } from './reminder-detail.component';
import { ReminderService } from './reminder.service';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService),],
  declarations: [ AppComponent, ReminderDetailComponent, AllRemindersComponent ],
  providers:    [ ReminderService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
