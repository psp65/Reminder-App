"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var reminder_service_1 = require("./reminder.service");
var AllRemindersComponent = (function () {
    function AllRemindersComponent(reminderService, router) {
        this.reminderService = reminderService;
        this.router = router;
    }
    AllRemindersComponent.prototype.getReminders = function () {
        var _this = this;
        this.reminderService.getReminders().then(function (rems) { return _this.reminders = rems; });
    };
    AllRemindersComponent.prototype.ngOnInit = function () {
        this.getReminders();
    };
    AllRemindersComponent.prototype.onSelect = function (rem) {
        this.selectedRem = rem;
        this.router.navigate(['/reminder', this.selectedRem.id]);
    };
    AllRemindersComponent.prototype.add = function (task, desc) {
        var _this = this;
        task = task.trim();
        desc = desc.trim();
        if (!task) {
            return;
        }
        this.reminderService.create(task, desc)
            .then(function (rem) {
            _this.reminders.push(rem);
            _this.selectedRem = null;
        });
    };
    AllRemindersComponent.prototype.delete = function (rem) {
        var _this = this;
        this.reminderService
            .delete(rem.id)
            .then(function () {
            _this.reminders = _this.reminders.filter(function (r) { return r !== rem; });
            if (_this.selectedRem === rem) {
                _this.selectedRem = null;
            }
        });
    };
    return AllRemindersComponent;
}());
AllRemindersComponent = __decorate([
    core_1.Component({
        selector: 'all-rems',
        templateUrl: './all-reminders.component.html',
        styleUrls: ['./all-reminders.component.css'],
    }),
    __metadata("design:paramtypes", [reminder_service_1.ReminderService,
        router_1.Router])
], AllRemindersComponent);
exports.AllRemindersComponent = AllRemindersComponent;
//# sourceMappingURL=all-reminders.component.js.map