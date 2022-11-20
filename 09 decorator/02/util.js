class Sprite {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.image = null;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  getX() {
    return this.x
  }
  setX(x) {
    this.x = x
  }
  getY() {
    return this.y
  }
  setY(y) {
    this.y = y
  }

  getImage() {
    return this.image;
  }
  setImage(image) {
    this.image = image;
  }
}

export class Plane extends Sprite { }

export class Bullet extends Sprite {
  draw(context) {
    this.move(0, -20);
    context.drawImage(this.image, this.x, this.y);
  }
}

export class BulletDecorator {
  constructor(bullet) {
    this.bullet = bullet;
    this.x = 0;
    this.y = 0;
    this.image = null;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  getX() {
    return this.x
  }
  setX(x) {
    this.x = x
  }
  getY() {
    return this.y
  }
  setY(y) {
    this.y = y
  }

  getImage() {
    return this.image;
  }
  setImage(image) {
    this.image = image;
  }

  draw(context) {
    this.bullet.draw(context);
    this.move(0, 20);
    context.drawImage(this.image, this.x, this.y);
  }
}
