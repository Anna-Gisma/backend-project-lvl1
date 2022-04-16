export const getRandom = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

export const getArithmeticResult = (operatorNumber, firstNumber, secondNumber) => {
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
  return [number, answer];
};

export const isEven = (number) => (number % 2 === 0);

export const getGcd = (firstNumber, secondNumber) => {
  let answer = 0;
  let a = firstNumber;
  let b = secondNumber;
  if (a === b) { return a; }
  while (a !== b) {
    answer = (a > b) ? (a -= b) : (b -= a);
  }
  return answer;
};

export const isPrime = (number) => {
  const borderNumber = Math.sqrt(number);
  for (let j = 2; j <= borderNumber; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

export const getProgression = (
  progressionLength,
  firstProgressionNumber,
  progressionStep,
  requiredSymbolPosition,
) => {
  const progression = [];
  let count = progressionLength;
  let nextNumber = firstProgressionNumber;
  while (count > 0) {
    progression.push(nextNumber);
    nextNumber += progressionStep;
    count -= 1;
  }
  const answer = progression[requiredSymbolPosition];
  progression[requiredSymbolPosition] = '..';
  const newProgression = progression.join(' ');
  return [newProgression, answer];
};
