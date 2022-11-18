export class Memento {
  constructor(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

export class Stack {
  constructor() {
    this.mementos = [];
    this.index = 0;
  }

  push(memento) {
    this.mementos.push(memento);
    this.index += 1;
  }

  forward() {
    const memento = this.mementos[this.index];
    if (this.index < this.mementos.length)
      this.index += 1;
    return memento;
  }

  back() {
    if (this.index > 0) this.index -= 1;
    return this.mementos[this.index];
  }
}

export class Originator {
  constructor() {
    this.state = ''
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }

  createMemento() {
    return new Memento(this.state);
  }

  setMemento(memento) {
    this.state = memento.getState();
  }

  show() {
    return this.state;
  }
}
