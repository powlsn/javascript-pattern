import { Shape } from "./shape.js";

export class Square extends Shape {
  constructor(x, y, length) {
    super(x, y)
    this.length = length;
  }

  draw(context) {
    context.fillStyle = '#00ff00';
    context.fillRect(this.x, this.y, this.length, this.length);
  }
}
