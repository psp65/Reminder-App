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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
var reminder_service_1 = require("./reminder.service");
var ReminderDetailComponent = (function () {
    function ReminderDetailComponent(reminderService, route, location, router) {
        this.reminderService = reminderService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ReminderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.reminderService.getReminder(+params.get('id')); })
            .subscribe(function (rem) { return _this.reminder = rem; });
    };
    ReminderDetailComponent.prototype.save = function (rem) {
        var _this = this;
        this.reminderService.update(rem)
            .then(function () { return _this.router.navigate(['/reminders']); });
    };
    ReminderDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReminderDetailComponent.prototype.close = function () {
        this.router.navigate(['/reminders']);
    };
    return ReminderDetailComponent;
}());
ReminderDetailComponent = __decorate([
    core_1.Component({
        selector: 'reminder-detail',
        templateUrl: './reminder-detail.component.html',
        styleUrls: ['./reminder-detail.component.css']
    }),
    __metadata("design:paramtypes", [reminder_service_1.ReminderService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_2.Router])
], ReminderDetailComponent);
exports.ReminderDetailComponent = ReminderDetailComponent;
//# sourceMappingURL=reminder-detail.component.js.map