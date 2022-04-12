#!/usr/bin/env node
import arrGenerate from '../src/games/prime.js';
import { startResultComplain } from '../src/index.js';

startResultComplain(arrGenerate());
