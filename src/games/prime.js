import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import { runEngine, roundsCount } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const roundData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = String(getRandom(1, 100));
    const answer = isPrime(number) ? 'yes' : 'no';
    roundData.push(cons(number, answer));
  }
  return roundData;
};

export default () => runEngine(getRoundData(), rule);
