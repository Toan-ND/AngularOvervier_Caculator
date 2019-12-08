import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1: number;
  number2: number;
  result: number;
  nhap = '';


  setNumber1(numberx) {
    // tslint:disable-next-line:radix
    this.number1 = parseInt(numberx);
  }

  setNumber2(numberx) {
    // tslint:disable-next-line:radix
    this.number2 = parseInt(numberx);
  }

  setNhap(nhap) {
    this.nhap = nhap;
  }

  caculate() {
    switch (this.nhap) {
      case '+':
        // tslint:disable-next-line:radix
        this.result = this.number1 + this.number2;
        break;
        console.log(this.result);
      case '-':
        this.result = this.number1 - this.number2;
        break;
        console.log(this.result);
      case 'x':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }

  }

  constructor() {
  }

  ngOnInit() {
  }

}
