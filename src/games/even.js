import { cons } from '@hexlet/pairs';
import { getRandom, isEven } from '../functions.js';

const generateRoundData = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(getRandom(0, 100));
    const answer = isEven(number) ? 'yes' : 'no';
    roundData.push(cons(number, answer));
  }
  return [roundData, rule];
};
export default generateRoundData;
