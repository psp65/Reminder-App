import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Reminder } from './reminder';

@Injectable()
export class ReminderService {

    private remUrl = 'api/reminders';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getReminders(): Promise<Reminder[]> {
        return this.http.get(this.remUrl)
        .toPromise()
        .then(response => response.json().data as Reminder[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }

    getRemindersSlowly(): Promise<Reminder[]> {
        return new Promise(resolve => {
          setTimeout(() => resolve(this.getReminders()), 2000);
        });
    }

    getReminder(id: number): Promise<Reminder> {
        const url = `${this.remUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Reminder)
          .catch(this.handleError);
    }

    create(task: string, desc: string): Promise<Reminder> {
        return this.http
          .post(this.remUrl, JSON.stringify({task: task, desc: desc}), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Reminder)
          .catch(this.handleError);
    }

    update(rem: Reminder): Promise<Reminder> {
        const url = `${this.remUrl}/${rem.id}`;
        return this.http
          .put(url, JSON.stringify(rem), {headers: this.headers})
          .toPromise()
          .then(() => rem)
          .catch(this.handleError);
      }

      delete(id: number): Promise<void> {
        const url = `${this.remUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }
}
