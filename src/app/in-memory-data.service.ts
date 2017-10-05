import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reminders = [
        { id: 0, task: 'Make this app run', desc: 'IMP'},
        { id: 1, task: 'Bring Milk', desc: 'Not IMP' },
        { id: 2, task: 'Bring Eggs', desc: 'IMP' },
        { id: 3, task: 'Sell Bicycle', desc: 'Not IMP' },
        { id: 4, task: 'Meeting in Friday Eve', desc: 'IMP' },
        { id: 5, task: 'Marathon on Sunday', desc: 'Not IMP' },
        { id: 6, task: 'Assignment due on Monday', desc: 'IMP' },
    ];
    return {reminders};
  }
}