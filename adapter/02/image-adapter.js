import { Adapter } from "./adapter.js";

export class ImageAdapter extends Adapter {
  constructor(list) {
    super(list);
    this.list = list;
  }

  createMenu() {
    const mappedList = this.list.map(item => `<li><img src="images/icon.jpg" /> ${item}</li>`);
    return `<ul>${mappedList.join('')}</ul>`;
  }
}
