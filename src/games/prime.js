import { simpleOperation } from '../getSomeFunctions.js';
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

const getRoundData = () => simpleOperation(roundsCount, isPrime);

export default () => runEngine(getRoundData(), rule);
