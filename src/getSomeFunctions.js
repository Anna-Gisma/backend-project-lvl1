import { cons } from '@hexlet/pairs';

const getRandom = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);
const simpleOperation = (roundsCount, theFunction) => {
  const roundData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = String(getRandom(0, 100));
    const answer = theFunction(number) ? 'yes' : 'no';
    roundData.push(cons(number, answer));
  }
  return roundData;
};

export { getRandom, simpleOperation };
