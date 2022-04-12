import { cons } from '@hexlet/pairs';
import { greeting } from '../index.js';
import getRandom from '../get-random.js';

const arrGenerate = () => {
  greeting();
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(getRandom(0, 100));
    const answer = (number % 2 === 0) ? 'yes' : 'no';
    taskArray.push(cons(number, answer));
  }
  return taskArray;
};
export default arrGenerate;
