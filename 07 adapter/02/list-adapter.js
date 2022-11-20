import { Adapter } from "./adapter.js";

export class ListAdapter extends Adapter {
  constructor(list) {
    super(list);
    this.list = list;
  }

  createMenu() {
    const mappedList = this.list.map(item => `<li>${item}</li>`)
    return `<ul>${mappedList.join('')}</ul>`;
  }
}
