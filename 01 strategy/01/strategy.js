// Base Class
class Strategie {
  calculate(a, b) { }
}

// Addition
class Addition extends Strategie {
  calculate(a, b) {
    return a + b;
  }
}

// Subtraction
class Subtraction extends Strategie {
  calculate(a, b) {
    return a - b;
  }
}

// Multiplication
class Multiplication extends Strategie {
  calculate(a, b) {
    return a * b;
  }
}

// Division
class Division extends Strategie {
  calculate(a, b) {
    return a / b;
  }
}

// Context
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(a, b) {
    return this.strategy.calculate(a, b);
  }
}

// module.exports = Context, Addition;
export {
  Addition,
  Subtraction,
  Multiplication,
  Division,
  Context,
}
