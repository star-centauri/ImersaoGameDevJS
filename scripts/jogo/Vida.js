class Vida {
    constructor({total, initial}) {
        this._total = total;
        this._initial = initial;
        this._width = 40;
        this._height = 40;

        this._margin = 10;
    }

    draw () {
        for(let i = 0; i < this._initial; i++) {
            let position_x = (this._width*i)+this._margin;
            image(imageLife, position_x, this._margin, this._width, this._height);
        }
    }

    comeToLife() {
        if (this._initial < this.total) {
            this._initial++;
        }
    }

    loseLife() {
        this._initial--;
    }

    isZero() {
        return this._initial == 0;
    }
}