import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Reminder } from './reminder';
import { ReminderService } from './reminder.service';

@Component({
  selector: 'all-rems',
  templateUrl: './all-reminders.component.html',
  styleUrls: ['./all-reminders.component.css'],
})


export class AllRemindersComponent implements OnInit {

  reminders: Reminder[];
  selectedRem: Reminder;

  constructor(
    private reminderService: ReminderService,
    private router: Router) { }

  getReminders(): void {
    this.reminderService.getReminders().then(rems => this.reminders = rems);
  }

  ngOnInit(): void {
    this.getReminders();
  }

  onSelect(rem: Reminder): void {
    this.selectedRem = rem;
    this.router.navigate(['/reminder', this.selectedRem.id]);
  }

  add(task: string, desc: string): void {
    task = task.trim();
    desc = desc.trim();
    if (!task) { return; }
    this.reminderService.create(task, desc)
      .then(rem => {
        this.reminders.push(rem);
        this.selectedRem = null;
      });
  }

  delete(rem: Reminder): void {
    this.reminderService
        .delete(rem.id)
        .then(() => {
          this.reminders = this.reminders.filter(r => r !== rem);
          if (this.selectedRem === rem) { this.selectedRem = null; }
        });
  }

}
