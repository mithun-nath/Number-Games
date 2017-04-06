var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';
export var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.dataFromChild = new EventEmitter();
        this.target = 0;
        this.random = 0;
        this.randomInt = 0;
    }
    WelcomeComponent.prototype.generateNumber = function () {
        this.random = Math.random() * 100;
        this.randomInt = Math.floor(this.random);
        this.target = this.randomInt + 1;
        this.dataFromChild.emit(this.target);
    };
    __decorate([
        Input('mydata'), 
        __metadata('design:type', Object)
    ], WelcomeComponent.prototype, "tests", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], WelcomeComponent.prototype, "dataFromChild", void 0);
    WelcomeComponent = __decorate([
        Component({
            selector: 'app-welcome',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
//# sourceMappingURL=/Users/mithunnath-blogger/Angular2/src/app/welcome/welcome.component.js.map