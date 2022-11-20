import { Shape } from "./shape.js";

export class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y)
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillStyle = '#ff0000';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
