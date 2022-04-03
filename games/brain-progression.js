#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { greeting, sayRules, resultComplain } from '../src/index.js';

greeting();
const rule = 'What number is missing in the progression?';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = Math.floor(Math.random() * (5) + 6);
    const progressionStep = Math.floor(Math.random() * (6) + 1);
    const firstProgressionNumber = Math.floor(Math.random() * (100));
    const requiredSymbolPosition = Math.floor(Math.random() * (progressionLength - 5) + 3);
    const progression = [];

    let count = progressionLength;
    let nextNumber = firstProgressionNumber;
    while (count > 0) {
      progression.push(nextNumber);
      nextNumber += progressionStep;
      count -= 1;
    }
    const answer = progression[requiredSymbolPosition];
    progression[requiredSymbolPosition] = '..';
    taskArray.push(cons(progression, String(answer)));
  }
  return taskArray;
};

resultComplain(arrGenerate());
