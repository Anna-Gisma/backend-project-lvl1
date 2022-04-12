#!/usr/bin/env node
import arrGenerate from '../src/games/even.js';
import { startResultComplain } from '../src/index.js';

startResultComplain(arrGenerate());
