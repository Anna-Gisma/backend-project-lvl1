import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const startResultComplain = ([roundsData, rule]) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  const rounds = 3;
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
export default startResultComplain;
