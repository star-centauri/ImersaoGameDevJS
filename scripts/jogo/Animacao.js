class Animacao {
  constructor({matrixAnimation, image, position_x, position_y, widthPerson, heightPerson, widthSprite, heightSprite}) {
    this._matrix = matrixAnimation;
    this._image = image;
    this._width = widthPerson;
    this._height = heightPerson;
    this._x = position_x;
    this._y = height-this._height-position_y;
    this._widthSprite = widthSprite;
    this._heightSprite = heightSprite;

    this._soundJump = undefined;
    
    this._frameCurrent = 0;
  }
  
  set soundJump (sound) {
    this._soundJump = loadSound(sound);
  }

  get soundJump() {
    return this._soundJump;
  }

  display () {
    image(
      this._image, 
      this._x, 
      this._y, 
      this._width, 
      this._height, 
      this._matrix[this._frameCurrent][0], 
      this._matrix[this._frameCurrent][1], 
      this._widthSprite, 
      this._heightSprite
    );
    
    this._animate();
  }
  
  _animate() {
    this._frameCurrent = (this._frameCurrent + 1) % this._matrix.length;
  }
}