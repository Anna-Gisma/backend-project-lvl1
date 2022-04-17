import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import runEngine from '../index.js';

export const isPrime = (number) => {
  const borderNumber = Math.sqrt(number);
  for (let j = 2; j <= borderNumber; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(getRandom(1, 100));
    const answer = isPrime(number) ? 'yes' : 'no';
    roundData.push(cons(number, answer));
  }
  return [roundData, rule];
};

export default () => runEngine(getRoundData());
