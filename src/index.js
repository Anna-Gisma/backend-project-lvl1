import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const rounds = 3; // rounds count

//  приветствие
let name = ' ';
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

// правила игры
export const sayRules = (rule) => console.log(rule);
export const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

export const resultComplain = (x) => {
  let i = 0;
  while (i < rounds) {
    console.log(`Question: ${car(x[i])}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(x[i]);
    i += 1;
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
