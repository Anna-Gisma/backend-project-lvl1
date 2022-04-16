import { cons } from '@hexlet/pairs';
import { getRandom, getProgression } from '../functions.js';

const generateRoundData = () => {
  const rule = 'What number is missing in the progression?';
  const roundData = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandom(10, 6);
    const progressionStep = getRandom(7, 1);
    const firstProgressionNumber = getRandom(0, 100);
    const requiredSymbolPosition = getRandom(progressionLength - 1, 2);
    const [newProgression, answer] = getProgression(
      progressionLength,
      firstProgressionNumber,
      progressionStep,
      requiredSymbolPosition,
    );
    roundData.push(cons(newProgression, String(answer)));
  }
  return [roundData, rule];
};

export default generateRoundData;
