#!/usr/bin/env node
import generateRoundData from '../src/games/prime.js';
import startResultComplain from '../src/index.js';

startResultComplain(generateRoundData());
