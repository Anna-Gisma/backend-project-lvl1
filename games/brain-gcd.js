#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { greeting, sayRules, resultComplain } from '../../src/index.js';

greeting();
const rule = 'Find the greatest common divisor of given numbers.';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const first = Math.floor(Math.random() * (100));
    const second = Math.floor(Math.random() * (100));
    const getGsd = (firstNum, secondNum) => {
      let answer = 0;
      let a = firstNum;
      let b = secondNum;
      if (a === b) { return a; }
      while (a !== b) {
        answer = (a > b) ? (a -= b) : (b -= a);
      }
      return answer;
    };
    taskArray.push(cons([first, second], String(getGsd(first, second))));
  }
  return taskArray;
};
resultComplain(arrGenerate());
