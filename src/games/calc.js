import { cons } from '@hexlet/pairs';
import { getRandom, getArithmeticResult } from '../functions.js';

const generateRoundData = () => {
  const rule = 'What is the result of the expression?';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandom(1, 100);
    const secondNumber = getRandom(1, 100);
    const operatorNumber = getRandom(1, 3);
    const [number, answer] = getArithmeticResult(operatorNumber, firstNumber, secondNumber);
    roundData.push(cons(number, String(answer)));
  }
  return [roundData, rule];
};

export default generateRoundData;
