#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { greeting, sayRules, resultComplain } from '../src/index.js';

greeting();
const rule = 'What is the result of the expression?';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * (100));
    const secondNumber = Math.floor(Math.random() * (100));
    const operatorNumber = Math.floor(Math.random() * (3));
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
