#!/usr/bin/env node
import arrGenerate from '../src/games/progression.js';
import { startResultComplain } from '../src/index.js';

startResultComplain(arrGenerate());
