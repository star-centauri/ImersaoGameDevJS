class Pontuacao {
    constructor() {
        this._points = 0;
    }

    display() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this._points), width - 30, 50);
    }

    set points(value) {
        this._points += value;
    }
}