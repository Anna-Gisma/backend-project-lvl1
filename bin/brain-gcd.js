#!/usr/bin/env node
import arrGenerate from '../src/games/gcd.js';
import { startResultComplain } from '../src/index.js';

startResultComplain(arrGenerate());
