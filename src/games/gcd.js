import { cons } from '@hexlet/pairs';
import { getRandom } from '../getSomeFunctions.js';
import { runEngine, roundsCount } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

export const getGcd = (firstNumber, secondNumber) => {
  if (firstNumber % secondNumber === 0) {
    return secondNumber;
  }
  return getGcd(secondNumber, firstNumber % secondNumber);
};

const getRoundData = () => {
  const roundData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const first = getRandom(1, 100);
    const second = getRandom(1, 100);
    const question = `${first} ${second}`;
    roundData.push(cons((question), String(getGcd(first, second))));
  }
  return roundData;
};

export default () => runEngine(getRoundData(), rule);
