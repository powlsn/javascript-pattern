import {
  Context,
  Addition,
  Subtraction,
  Multiplication,
  Division,
} from './strategy.js';

// Addition
const ctxAdd = new Context(new Addition());
const resAdd = ctxAdd.calculate(4, 2);
console.log('Addition', resAdd);

// Subctraction
const ctxSub = new Context(new Subtraction());
const resSub = ctxSub.calculate(4, 2);
console.log('Subtraction', resSub);

// Multiplikation
const ctxMul = new Context(new Multiplication());
const resMul = ctxMul.calculate(4, 2);
console.log('Multiplikation', resMul);

// Division
const ctxDiv = new Context(new Division());
const resDiv = ctxDiv.calculate(4, 2);
console.log('Division', resDiv);
