class GameOver {
    constructor (image) {
        this._image = image;
    }
    
    draw () {
        let x = (width - this._image.width)/2,
            y = (height - this._image.height)/2;

        image(this._image, x, y, this._image.width, this._image.height);
    }
      
  }