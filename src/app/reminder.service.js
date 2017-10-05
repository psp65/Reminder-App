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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ReminderService = (function () {
    function ReminderService(http) {
        this.http = http;
        this.remUrl = 'api/reminders'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ReminderService.prototype.getReminders = function () {
        return this.http.get(this.remUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ReminderService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    ReminderService.prototype.getRemindersSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getReminders()); }, 2000);
        });
    };
    ReminderService.prototype.getReminder = function (id) {
        var url = this.remUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ReminderService.prototype.create = function (task, desc) {
        return this.http
            .post(this.remUrl, JSON.stringify({ task: task, desc: desc }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ReminderService.prototype.update = function (rem) {
        var url = this.remUrl + "/" + rem.id;
        return this.http
            .put(url, JSON.stringify(rem), { headers: this.headers })
            .toPromise()
            .then(function () { return rem; })
            .catch(this.handleError);
    };
    ReminderService.prototype.delete = function (id) {
        var url = this.remUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return ReminderService;
}());
ReminderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ReminderService);
exports.ReminderService = ReminderService;
//# sourceMappingURL=reminder.service.js.map