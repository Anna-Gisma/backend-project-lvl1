import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import { runEngine, roundsCount } from '../index.js';

const rule = 'What number is missing in the progression?';

export const getProgression = (
  progressionLength,
  firstProgressionNumber,
  progressionStep,
  requiredSymbolPosition,
) => {
  const progression = [];
  for (let count = 0; count < progressionLength; count += 1) {
    const nextNumber = firstProgressionNumber + (progressionStep * count);
    progression.push(nextNumber);
  }
  progression[requiredSymbolPosition] = '..';
  const newProgression = progression.join(' ');
  return newProgression;
};

const getRoundData = () => {
  const roundData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const progressionLength = getRandom(6, 10);
    const progressionStep = getRandom(1, 7);
    const firstProgressionNumber = getRandom(0, 100);
    const requiredSymbolPosition = getRandom(0, progressionLength - 1);
    const answer = firstProgressionNumber + requiredSymbolPosition * progressionStep;
    const newProgression = getProgression(
      progressionLength,
      firstProgressionNumber,
      progressionStep,
      requiredSymbolPosition,
    );
    roundData.push(cons(newProgression, String(answer)));
  }
  return roundData;
};

export default () => runEngine(getRoundData(), rule);
