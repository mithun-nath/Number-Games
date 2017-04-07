import { Component } from '@angular/core';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.css']
})
export class GuessNumberComponent  {
  guessSeriese = [];
  guessNumber;
  temp = 0;
  attempt = 0;
  finished = false;
  target = 0;
  hint = '';
  random = 0;
  randomInt = 0;

  constructor() {
    this.random = Math.random() * 100;
    this.randomInt = Math.floor(this.random);
    this.target = this.randomInt + 1;
  }
  guessCheck(guessNumberInput: HTMLInputElement) {
    this.guessNumber = guessNumberInput.value;
    this.attempt++;
    if (this.guessNumber > this.target) {
      return this.hint = 'Your number is greater than mine';
    } else if (this.guessNumber < this.target) {
      return this.hint = 'Your number is smaller than mine';
    }else {
      this.guessSeriese.push(
        {
          try: this.attempt,
        }
      );
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
  }

  generateNumber() {
    this.random = Math.random() * 100;
    this.randomInt = Math.floor(this.random);
    this.target = this.randomInt + 1;
  }

/*
  compareNumber() {
    if (isNaN(this.guessNumber)) {
      this.hint = 'You should enter a number';
      return false;
    }

    if ((this.guessNumber > 100) || (this.guessNumber < 1)) {
      this.hint = 'Enter a number which is within the range of 1 to 100';
      return false;
    }

    else if (this.guessNumber > this.target) {
      this.hint = 'Your number is greater than mine';
      return false;
    }

    else if (this.guessNumber < this.target) {
      this.hint = 'Your number is smaller than mine';
      return false;
    }

    else if (this.guessNumber === this.target) {
      this.hint = 'Hurray....! You entered the correct number\n\n ' + 'You made ' + this.attempt + ' attempts \n\n\n';
      return true;
    }

  }

*/

}
