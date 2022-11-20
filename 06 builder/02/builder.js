import { Dialog } from "./dialog.js";

export class Builder {
  constructor() {
    this.dialog = new Dialog();
  }

  setMessage(message) {
    this.dialog.setMessage(message);
  }

  addButton(button) {
    this.dialog.addButton(button);
  }

  create() {
    return this.dialog;
  }
}
