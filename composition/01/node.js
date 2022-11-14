export class Node {
  constructor(name) {
    this.name = name;
    this.childNodes = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getChildNodes() {
    return this.childNodes;
  }

  hasChildNodes() {
    return this.childNodes.length > 0;
  }

  add(node) {
    this.childNodes.push(node);
  }
}
