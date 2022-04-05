#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import {
  greeting, sayRules, resultComplain, getRandom,
} from '../src/index.js';

greeting();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(getRandom(100));
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    taskArray.push(cons(number, answer));
  }
  return taskArray;
};
resultComplain(arrGenerate());
