import { cons } from '@hexlet/pairs';
import getRandom from '../getRandomfunction.js';
import runEngine from '../index.js';

export const getProgression = (
  progressionLength,
  firstProgressionNumber,
  progressionStep,
  requiredSymbolPosition,
) => {
  const progression = [];
  for (let count = 1; count < progressionLength; count += 1) {
    const nextNumber = firstProgressionNumber + (progressionStep * count);
    progression.push(nextNumber);
  }
  progression[requiredSymbolPosition] = '..';
  const newProgression = progression.join(' ');
  return newProgression;
};

const getRoundData = () => {
  const rule = 'What number is missing in the progression?';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandom(6, 10);
    const progressionStep = getRandom(1, 7);
    const firstProgressionNumber = getRandom(0, 100);
    const requiredSymbolPosition = getRandom(2, progressionLength - 2);
    const answer = firstProgressionNumber + (requiredSymbolPosition + 1) * progressionStep;
    const newProgression = getProgression(
      progressionLength,
      firstProgressionNumber,
      progressionStep,
      requiredSymbolPosition,
    );
    roundData.push(cons(newProgression, String(answer)));
  }
  return [roundData, rule];
};

export default () => runEngine(getRoundData());
