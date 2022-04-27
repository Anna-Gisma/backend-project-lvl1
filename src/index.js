import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const roundsCount = 3;
const runEngine = (roundsData, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (const data of roundsData) {
    console.log(`Question: ${car(data)}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(data);
    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export { runEngine, roundsCount };
