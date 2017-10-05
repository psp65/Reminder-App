import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { ReminderService } from './reminder.service';
import { Reminder } from './reminder';

@Component({
    selector: 'reminder-detail',
    templateUrl: './reminder-detail.component.html',
    styleUrls: ['./reminder-detail.component.css']
})

export class ReminderDetailComponent implements OnInit {
    reminder: Reminder;

    constructor(
        private reminderService: ReminderService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
      ) {}

    ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.reminderService.getReminder(+params.get('id')))
          .subscribe(rem => this.reminder = rem);
    }

    save(rem: Reminder): void {
        this.reminderService.update(rem)
          .then(() => this.router.navigate(['/reminders']));
    }

    goBack(): void {
        this.location.back();
    }

    close(): void {
        this.router.navigate(['/reminders']);
    }

}
