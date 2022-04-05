#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import {
  greeting, sayRules, resultComplain, getRandom,
} from '../src/index.js';

greeting();
const rule = 'What number is missing in the progression?';
sayRules(rule);
const arrGenerate = () => {
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandom(6, 10);
    const progressionStep = getRandom(1, 7);
    const firstProgressionNumber = getRandom(0, 100);
    const requiredSymbolPosition = getRandom(2, progressionLength - 1);
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
    const newProgression = progression.join(' ');
    taskArray.push(cons(newProgression, String(answer)));
  }
  return taskArray;
};

resultComplain(arrGenerate());
