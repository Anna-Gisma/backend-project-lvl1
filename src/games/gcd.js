import { cons } from '@hexlet/pairs';
import { getRandom, getGcd } from '../functions.js';

const generateRoundData = () => {
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
export default generateRoundData;
