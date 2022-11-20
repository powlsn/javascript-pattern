export class MenuItem {
  constructor(name) {
    this.name = name;
    this.childMenuItems = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getChildMenuItems() {
    return this.childMenuItems;
  }

  add(node) {
    this.childMenuItems.push(node)
  }
}
