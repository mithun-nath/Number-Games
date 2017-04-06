var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var GuessNumberComponent = (function () {
    function GuessNumberComponent() {
        this.guessSeriese = [];
        this.guessNumber = 0;
        this.temp = 0;
        this.attempt = 0;
        this.finished = false;
        this.target = 0;
        this.hint = '';
        this.random = 0;
        this.randomInt = 0;
        this.random = Math.random() * 100;
        this.randomInt = Math.floor(this.random);
        this.target = this.randomInt + 1;
    }
    GuessNumberComponent.prototype.guessCheck = function () {
        this.attempt++;
        if (this.guessNumber > this.target) {
            return this.hint = 'Your number is greater than mine';
        }
        else if (this.guessNumber < this.target) {
            return this.hint = 'Your number is smaller than mine';
        }
        else {
            this.guessSeriese.push({
                try: this.attempt,
            });
            this.generateNumber();
            return this.hint = 'It worked! Attempts: ' + this.attempt;
        }
        /*
          while (!this.finished) {
            this.attempt++;
            this.temp = this.guessNumber;
            this.finished = this.compareNumber();
          }
          */
    };
    GuessNumberComponent.prototype.generateNumber = function () {
        this.random = Math.random() * 100;
        this.randomInt = Math.floor(this.random);
        this.target = this.randomInt + 1;
    };
    GuessNumberComponent = __decorate([
        Component({
            selector: 'app-guess-number',
            templateUrl: './guess-number.component.html',
            styleUrls: ['./guess-number.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GuessNumberComponent);
    return GuessNumberComponent;
}());
//# sourceMappingURL=/Users/mithunnath-blogger/Angular2/src/app/guess-number/guess-number.component.js.map