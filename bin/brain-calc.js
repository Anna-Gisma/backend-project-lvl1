#!/usr/bin/env node
import arrGenerate from '../src/games/calc.js';
import { startResultComplain } from '../src/index.js';

startResultComplain(arrGenerate());
