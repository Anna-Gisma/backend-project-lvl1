#!/usr/bin/env node
import generateRoundData from '../src/games/even.js';
import startResultComplain from '../src/index.js';

startResultComplain(generateRoundData());
