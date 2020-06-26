class Personagem extends Animacao {
  constructor({matrixAnimation, image, position_x, widthPerson, heightPerson, widthSprite, heightSprite}) {
    super({
      matrixAnimation: matrixAnimation, 
      image: image, 
      position_x: position_x, 
      widthPerson: widthPerson, 
      heightPerson: heightPerson, 
      widthSprite: widthSprite, 
      heightSprite: heightSprite 
    });
    
    this._yBase = height - this._height;
    this._y = this._yBase;
    this._hopSpeed = 0;
    this._gravity = 3;
  }

  isFloor() {
    return this._y == this._yBase;
  }
  
  jump() {
    this._hopSpeed = -30;
  }
  
  applyGravity() {
    this._y += this._hopSpeed;
    this._hopSpeed += this._gravity;
    
    if(this._y > this._yBase) {
      this._y = this._yBase;
    }
  }
  
  colliding(inimigo) {
    const precision = 0.65;
    const collision = collideRectRect(
      this._x,
      this._y,
      this._width*precision,
      this._height*precision,
      inimigo._x,
      inimigo._y,
      inimigo._width*precision,
      inimigo._height
    );
    
    return collision;
  }
    
}