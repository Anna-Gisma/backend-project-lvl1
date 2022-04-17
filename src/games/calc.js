import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import runEngine from '../index.js';

const getOperator = () => {
  const symbols = ['+', '-', '*'];
  const operatorNumber = getRandom(0, 2);
  return symbols[operatorNumber];
};

const getArithmeticResult = (theOperator, firstNumber, secondNumber) => {
  let answer = 0;
  const operator = theOperator;
  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    default:
      answer = firstNumber * secondNumber;
      break;
  }

  return answer;
};

const getRoundData = () => {
  const rule = 'What is the result of the expression?';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandom(1, 100);
    const secondNumber = getRandom(1, 100);
    const operator = getOperator();
    const answer = getArithmeticResult(operator, firstNumber, secondNumber);
    const number = `${firstNumber} ${operator} ${secondNumber}`;
    roundData.push(cons(number, String(answer)));
  }
  return [roundData, rule];
};

export default () => runEngine(getRoundData());
