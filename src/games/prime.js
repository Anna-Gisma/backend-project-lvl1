import { cons } from '@hexlet/pairs';
import { greeting } from '../index.js';
import getRandom from '../get-random.js';

const arrGenerate = () => {
  greeting();
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(rule);
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const number = String(getRandom(1, 100));
    const isPrime = (num) => {
      for (let j = 2; j <= Math.sqrt(num); j += 1) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    };
    const answer = isPrime(number) ? 'yes' : 'no';
    taskArray.push(cons(number, answer));
  }
  return taskArray;
};
export default arrGenerate;
