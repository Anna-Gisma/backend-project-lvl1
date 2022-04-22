import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import { runEngine, roundsCount } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const isEven = (number) => (number % 2 === 0);

export const getRoundData = () => {
  const roundData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = String(getRandom(0, 500));
    const answer = isEven(number) ? 'yes' : 'no';
    roundData.push(cons(number, answer));
  }
  return roundData;
};
export default () => runEngine(getRoundData(), rule);
