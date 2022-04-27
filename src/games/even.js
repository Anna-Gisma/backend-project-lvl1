import { simpleOperation } from '../getSomeFunctions.js';
import { runEngine, roundsCount } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const isEven = (number) => (number % 2 === 0);

export const getRoundData = () => simpleOperation(roundsCount, isEven);
export default () => runEngine(getRoundData(), rule);
