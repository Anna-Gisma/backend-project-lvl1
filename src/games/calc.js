import { cons } from '@hexlet/pairs';
import { greeting } from '../index.js';
import getRandom from '../get-random.js';

const arrGenerate = () => {
  greeting();
  const rule = 'What is the result of the expression?';
  console.log(rule);
  const taskArray = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandom(1, 100);
    const secondNumber = getRandom(1, 100);
    const operatorNumber = getRandom(1, 3);
    let operator = '';
    let answer = 0;
    switch (operatorNumber) {
      case 0:
        operator = '+';
        answer = firstNumber + secondNumber;
        break;
      case 1:
        operator = '-';
        answer = firstNumber - secondNumber;
        break;
      default:
        operator = '*';
        answer = firstNumber * secondNumber;
        break;
    }
    const number = `${firstNumber} ${operator} ${secondNumber}`;
    taskArray.push(cons(number, String(answer)));
  }
  return taskArray;
};

export default arrGenerate;
