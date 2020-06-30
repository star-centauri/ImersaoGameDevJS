class Personagem extends Animacao {
  constructor({matrixAnimation, image, position_x, position_y, widthPerson, heightPerson, widthSprite, heightSprite}) {
    super({
      matrixAnimation: matrixAnimation, 
      image: image, 
      position_x: position_x, 
      position_y: position_y,
      widthPerson: widthPerson, 
      heightPerson: heightPerson, 
      widthSprite: widthSprite, 
      heightSprite: heightSprite 
    });
    
    this._yBase = this._y;
    this._hopSpeed = 0;
    this._gravity = 2;

    this._countJump = 0;
    this._damageTime = false;
  }
  
  jump() {
    if (this._countJump < 2) {
      this._hopSpeed = -25;
      this.soundJump.play();
      this._countJump++;  
    }
  }
  
  applyGravity() {
    this._y += this._hopSpeed;
    this._hopSpeed += this._gravity;
    
    if(this._y > this._yBase) {
      this._y = this._yBase;
      this._countJump = 0;
    }
  }

  _applyDamageTime() {
    this._damageTime = true;

    setTimeout(() => this._damageTime = false, 1000);
  }
  
  colliding(inimigo) {
    if (this._damageTime) {
      return false;
    }

    const collision = collideRectRect(
      this._x,
      this._y,
      this._width,
      this._height,
      inimigo._x,
      inimigo._y,
      inimigo._width,
      inimigo._height
    );

    if (collision) {
      this._applyDamageTime();
    }
    
    return collision;
  }
    
}