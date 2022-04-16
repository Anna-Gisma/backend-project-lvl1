import { cons } from '@hexlet/pairs';
import { getRandom, isPrime } from '../functions.js';

const generateRoundData = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(getRandom(1, 100));
    const answer = isPrime(number) ? 'yes' : 'no';
    roundData.push(cons(number, answer));
  }
  return [roundData, rule];
};
export default generateRoundData;
