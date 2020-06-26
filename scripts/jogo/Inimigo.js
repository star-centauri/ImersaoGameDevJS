class Inimigo extends Animacao {
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
  }
  
  move (velocidade) {
    this._x -= velocidade;
    
    if(this._x < -this._width) {
      this._x = width;
    }
  }
}