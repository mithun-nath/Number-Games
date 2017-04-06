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
export var DatabindingExamplesComponent = (function () {
    function DatabindingExamplesComponent() {
        this.servers = [];
        this.serverName1 = '';
    }
    DatabindingExamplesComponent.prototype.addServer = function () {
        this.servers.push({
            type: 'server',
            name: 'server-alpha',
            content: 'server initialized'
        });
    };
    DatabindingExamplesComponent.prototype.removeServer = function () {
        this.servers.pop();
    };
    DatabindingExamplesComponent.prototype.addnewServer = function () {
        this.servers.push({
            type: 'server',
            name: this.serverName1,
            content: this.serverName1
        });
    };
    DatabindingExamplesComponent = __decorate([
        Component({
            selector: 'app-databinding-examples',
            templateUrl: './databinding-examples.component.html',
            styleUrls: ['./databinding-examples.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DatabindingExamplesComponent);
    return DatabindingExamplesComponent;
}());
//# sourceMappingURL=/Users/mithunnath-blogger/Angular2/src/app/databinding-examples/databinding-examples.component.js.map