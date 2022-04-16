#!/usr/bin/env node
import generateRoundData from '../src/games/calc.js';
import startResultComplain from '../src/index.js';

startResultComplain(generateRoundData());
