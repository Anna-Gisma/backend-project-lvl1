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

export const startResultComplain = (roundsData) => {
  for (let i = 0; i < rounds; i += 1) {
    console.log(`Question: ${car(roundsData[i])}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(roundsData[i]);
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
