#!/usr/bin/env node
import generateRoundData from '../src/games/gcd.js';
import startResultComplain from '../src/index.js';

startResultComplain(generateRoundData());
