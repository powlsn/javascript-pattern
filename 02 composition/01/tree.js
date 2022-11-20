import { Node } from "./node.js";

export class Tree {
  constructor(name) {
    this.name = name;
    this.root = new Node(name);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getRoot() {
    return this.root;
  }
}
