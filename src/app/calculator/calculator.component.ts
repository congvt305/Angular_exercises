import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  output: number;
  operator = '+';
  constructor() { }
  inputNumber1(value) {
    this.number1 = Number(value);
  }
  inputNumber2(value) {
    this.number2 = Number(value);
  }
  onSelectChange(value) {
    this.operator = value;
  }

  calc() {
    switch (this.operator) {
      case '+' :
        this.output = this.number1 + this.number2;
        break;
      case '-' :
        this.output = this.number1 - this.number2;
        break;
      case '*' :
        this.output = this.number1 * this.number2;
        break;
      case '/' :
        this.output = this.number1 / this.number2;
        break;
    }
  }
  ngOnInit(): void {
  }

}
