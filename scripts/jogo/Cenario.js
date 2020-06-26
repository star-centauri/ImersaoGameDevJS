class Cenario {
  constructor (imagemCenario, velocidade) {
    this._imagemCenario = imagemCenario;
    this._velocidade = velocidade;
    this._x1 = 0;
    this._x2 = width;
  }
  
  display () {
    image(this._imagemCenario, this._x1, 0, width, height);
    image(this._imagemCenario, this._x2, 0, width, height);
  }
  
  move () {
    this._x1 -= this._velocidade;
    this._x2 -= this._velocidade;
    
    if(this._x1 < -width) {
      this._x1 = width;
    }
    
    if(this._x2 < -width) {
      this._x2 = width;
    }
  }
    
}