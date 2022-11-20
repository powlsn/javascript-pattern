import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import { Round } from "./round.js";

export class ShapeFactory {
  static create(type) {
    return {
      Rectangle: new Rectangle(10, 10, 80, 50),
      Square: new Square(100, 10, 50),
      Round: new Round(190, 35, 25),
    }[type] ?? null
  }
}
