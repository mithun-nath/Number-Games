import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/common/src/facade/async';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent {

  @Input('mydata') tests;
  @Output() dataFromChild = new EventEmitter <number> ();

  public target = 0;
  random = 0;
  randomInt = 0;
  generateNumber() {
     this.random = Math.random() * 100;
     this.randomInt = Math.floor(this.random);
    this.target = this.randomInt + 1;
    this.dataFromChild.emit(this.target);
  }

}
