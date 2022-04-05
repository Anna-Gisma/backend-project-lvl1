#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { greeting, sayRules, resultComplain } from '../src/index.js';

greeting();
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(Math.floor(Math.random() * (99) + 1));
    const isPrime = (num) => {
      for (let j = 2; j < Math.sqrt(num); j += 1) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    };
    const answer = isPrime(number) ? 'yes' : 'no';
    taskArray.push(cons(number, answer));
  }
  return taskArray;
};
resultComplain(arrGenerate());
