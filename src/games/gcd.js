import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import runEngine from '../index.js';

export const getGcd = (firstNumber, secondNumber) => {
  const result = firstNumber % secondNumber;
  if (result === 0) {
    return secondNumber;
  }
  return getGcd(secondNumber, result);
};

const getRoundData = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const first = getRandom(1, 100);
    const second = getRandom(1, 100);
    const question = `${first} ${second}`;
    roundData.push(cons((question), String(getGcd(first, second))));
  }
  return [roundData, rule];
};

export default () => runEngine(getRoundData());
