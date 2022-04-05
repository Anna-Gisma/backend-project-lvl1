#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import {
  greeting, sayRules, resultComplain, getRandom,
} from '../src/index.js';

greeting();
const rule = 'What is the result of the expression?';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandom(0, 100);
    const secondNumber = getRandom(0, 100);
    const operatorNumber = getRandom(0, 3);
    let operator = '';
    let answer = 0;
    switch (operatorNumber) {
      case 0:
        operator = '+';
        answer = firstNumber + secondNumber;
        break;
      case 1:
        operator = '-';
        answer = firstNumber - secondNumber;
        break;
      default:
        operator = '*';
        answer = firstNumber * secondNumber;
        break;
    }
    const number = `${firstNumber} ${operator} ${secondNumber}`;
    taskArray.push(cons(number, String(answer)));
  }
  return taskArray;
};
resultComplain(arrGenerate());
