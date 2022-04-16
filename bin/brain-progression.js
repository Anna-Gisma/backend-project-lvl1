#!/usr/bin/env node
import generateRoundData from '../src/games/progression.js';
import startResultComplain from '../src/index.js';

startResultComplain(generateRoundData());
