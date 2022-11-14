export class Dialog {
  constructor() {
    this.message = '';
    this.buttons = [];
  }

  getMessage() { return this.message }
  setMessage(message) { this.message = message }
  getButtons() { return this.buttons }
  addButton(button) { this.buttons.push(button) }

  show() {
    const dialogDiv = document.createElement('div');
    dialogDiv.setAttribute('id', 'dialog');
    dialogDiv.innerHTML = `${this.getMessage()} <br> <br>`;

    this.buttons.forEach(button => {
      dialogDiv.innerHTML += `<input type="button" name="${button.getName()}" value="${button.getValue()}" />`;
    })

    document.body.appendChild(dialogDiv);
  }
}
