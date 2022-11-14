// Base Class
class PayStrategy {
  pay(price) { }
}

export class MasterCard extends PayStrategy {
  pay(price) {
    return `Pay ${price} by MasterCard`
  }
}

export class PayPal extends PayStrategy {
  pay(price) {
    return `Pay ${price} by PayPal`
  }
}

export class VisaCard extends PayStrategy {
  pay(price) {
    return `Pay ${price} by VisaCard`
  }
}

export class PayManager {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay(price) {
    return this.strategy.pay(price);
  }
}
