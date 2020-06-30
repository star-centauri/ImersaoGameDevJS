class Inimigo extends Animacao {
  constructor({matrixAnimation, image, position_x, position_y, widthPerson, heightPerson, widthSprite, heightSprite, velocity, delay}) {
    super({
      matrixAnimation: matrixAnimation, 
      image: image, 
      position_x: position_x + delay, 
      position_y: position_y,
      widthPerson: widthPerson, 
      heightPerson: heightPerson, 
      widthSprite: widthSprite, 
      heightSprite: heightSprite
    });

    this._delay = delay;
    this._velocity = velocity;
  }
  
  move () {
    this._x -= this._velocity;
  }

  reappears() {
    this._x = width;
  }

  get leftScreen () {
    return this._x < -this._width;
  }

  set velocity(velocity) {
    this._velocity = velocity;
  }
}