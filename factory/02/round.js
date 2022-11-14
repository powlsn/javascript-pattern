import { Shape } from "./shape.js";

export class Round extends Shape {
  constructor(x, y, r) {
    super(x, y)
    this.r = r;
  }

  draw(context) {
    context.fillStyle = '#0000ff';
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
  }
}
