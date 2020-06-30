class Cenario {
  constructor (velocidade) {
    this._imageForestBack   = imageForestBack;

    this._imageForestFront  = imageForestFront; 
    this._frontx1 = 0;
    this._frontx2 = width;

    this._imageForestLight  = imageForestLight;
    this._lightx1 = 0;
    this._lightx2 = width;
    
    this._imageForestMiddle = imageForestMiddle;
    this._middlex1 = 0;
    this._middlex2 = width;

    this._velocidade = velocidade;
  }
  
  display () {
    image(this._imageForestBack, 0, 0, width, height);

    image(this._imageForestLight, this._lightx1, 0, width, height);
    image(this._imageForestLight, this._lightx2, 0, width, height);

    image(this._imageForestMiddle, this._middlex1, 0, width, height);
    image(this._imageForestMiddle, this._middlex2, 0, width, height);

    image(this._imageForestFront, this._frontx1, 0, width, height);
    image(this._imageForestFront, this._frontx2, 0, width, height);
  }
  
  _moveMiddle() {
    this._middlex1 -= this._velocidade*0.5;
    this._middlex2 -= this._velocidade*0.5;
    
    if(this._middlex1 < -width) {
      this._middlex1 = width;
    }
    
    if(this._middlex2 < -width) {
      this._middlex2 = width;
    }
  }

  _moveFront() {
    this._frontx1 -= this._velocidade*0.7;
    this._frontx2 -= this._velocidade*0.7;
    
    if(this._frontx1 < -width) {
      this._frontx1 = width;
    }
    
    if(this._frontx2 < -width) {
      this._frontx2 = width;
    }
  }

  _moveLight() {
    this._lightx1 -= this._velocidade*0.3;
    this._lightx2 -= this._velocidade*0.3;
    
    if(this._lightx1 < -width) {
      this._lightx1 = width;
    }
    
    if(this._lightx2 < -width) {
      this._lightx2 = width;
    }
  }

  move () {
    this._moveMiddle();
    this._moveFront();
    this._moveLight();
  }
    
}