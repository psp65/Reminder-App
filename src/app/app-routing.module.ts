import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllRemindersComponent} from './all-reminders.component';
import { ReminderDetailComponent } from './reminder-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/reminders', pathMatch: 'full'},
  { path: 'reminders', component: AllRemindersComponent},
  { path: 'reminder/:id', component: ReminderDetailComponent},
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
