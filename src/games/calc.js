import { cons } from '@hexlet/pairs';
import { getRandom } from '../getSomeFunctions.js';
import { runEngine, roundsCount } from '../index.js';

const rule = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

const getArithmeticResult = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const getOneCalcRound = () => {
  const firstNumber = getRandom(1, 100);
  const secondNumber = getRandom(1, 100);
  const operator = symbols[getRandom(0, 2)];
  const answer = getArithmeticResult(operator, firstNumber, secondNumber);
  const number = `${firstNumber} ${operator} ${secondNumber}`;
  const result = cons(number, String(answer));
  return result;
};

const getRoundData = () => {
  const roundData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    roundData.push(getOneCalcRound());
  }
  return roundData;
};

export default () => runEngine(getRoundData(), rule);
