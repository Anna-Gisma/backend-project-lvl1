import { cons } from '@hexlet/pairs';
import { greeting } from '../index.js';
import getRandom from '../get-random.js';

const arrGenerate = () => {
  greeting();
  const rule = 'Find the greatest common divisor of given numbers.';
  console.log(rule);
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const first = getRandom(1, 100);
    const second = getRandom(1, 100);
    const question = `${first} ${second}`;
    const getGsd = (firstNum, secondNum) => {
      let answer = 0;
      let a = firstNum;
      let b = secondNum;
      if (a === b) { return a; }
      while (a !== b) {
        answer = (a > b) ? (a -= b) : (b -= a);
      }
      return answer;
    };
    taskArray.push(cons((question), String(getGsd(first, second))));
  }
  return taskArray;
};
export default arrGenerate;
